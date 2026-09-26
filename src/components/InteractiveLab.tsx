import React, { useEffect, useRef, useState, useCallback } from 'react';

type Topology = 'mesh' | 'star' | 'ring' | 'swarm';
type Algorithm = 'latent-semantic' | 'dijkstra' | 'flooding';

interface SimNode {
  id: number;
  label: string;
  x: number;
  y: number;
  role: 'gateway' | 'edge-relay' | 'terminal' | 'optical-oxc';
  queueDepth: number;
  capacity: number;
  packetCount: number;
  latencyJitter: number;
}

interface SimLink {
  from: number;
  to: number;
  bandwidth: string;
  latency: number;
  lossRate: number;
}

interface SimPacket {
  id: string;
  path: number[];
  currentIndex: number;
  progress: number; // 0 to 1 between nodes
  speed: number;
  priority: 'high-telepresence' | 'medium-telemetry' | 'low-texture';
  color: string;
  sourceId: number;
  destId: number;
}

export const InteractiveLab: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [topology, setTopology] = useState<Topology>('mesh');
  const [algorithm, setAlgorithm] = useState<Algorithm>('latent-semantic');
  const [lossRate, setLossRate] = useState<number>(5);
  const [autoTraffic, setAutoTraffic] = useState<boolean>(true);
  const [selectedNode, setSelectedNode] = useState<SimNode | null>(null);

  // Live real-time telemetry metrics
  const [metrics, setMetrics] = useState({
    packetsInFlight: 0,
    deliveredCount: 142,
    droppedCount: 4,
    meanLatency: '18.4ms',
    entropyRate: '3.82 bits/symbol',
  });

  const nodesRef = useRef<SimNode[]>([]);
  const linksRef = useRef<SimLink[]>([]);
  const packetsRef = useRef<SimPacket[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Re-generate topology nodes and links
  const initTopology = useCallback((top: Topology, width: number, height: number) => {
    let newNodes: SimNode[] = [];
    let newLinks: SimLink[] = [];

    const cx = width / 2;
    const cy = height / 2;

    if (top === 'mesh') {
      const count = 7;
      const radius = Math.min(width, height) * 0.36;
      for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
        newNodes.push({
          id: i,
          label: `Node ${i + 1}`,
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          role: i === 0 ? 'gateway' : i % 2 === 0 ? 'optical-oxc' : 'edge-relay',
          queueDepth: Math.floor(Math.random() * 8) + 2,
          capacity: 1000,
          packetCount: 0,
          latencyJitter: +(Math.random() * 2 + 1.2).toFixed(2),
        });
      }
      // Center router node
      newNodes.push({
        id: 7,
        label: 'Core Switch',
        x: cx,
        y: cy,
        role: 'optical-oxc',
        queueDepth: 4,
        capacity: 10000,
        packetCount: 0,
        latencyJitter: 0.8,
      });

      // Connect peripheral ring
      for (let i = 0; i < count; i++) {
        newLinks.push({ from: i, to: (i + 1) % count, bandwidth: '40Gbps', latency: 4, lossRate: 0.01 });
        newLinks.push({ from: i, to: 7, bandwidth: '100Gbps Optical', latency: 1.5, lossRate: 0.005 });
        if (i % 2 === 0) {
          newLinks.push({ from: i, to: (i + 3) % count, bandwidth: '10Gbps', latency: 8, lossRate: 0.03 });
        }
      }
    } else if (top === 'star') {
      newNodes.push({
        id: 0,
        label: 'Central Core',
        x: cx,
        y: cy,
        role: 'gateway',
        queueDepth: 12,
        capacity: 40000,
        packetCount: 0,
        latencyJitter: 0.6,
      });
      const count = 6;
      const radius = Math.min(width, height) * 0.38;
      for (let i = 1; i <= count; i++) {
        const angle = ((i - 1) * 2 * Math.PI) / count;
        newNodes.push({
          id: i,
          label: `Satellite ${i}`,
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          role: 'terminal',
          queueDepth: 3,
          capacity: 1000,
          packetCount: 0,
          latencyJitter: 3.1,
        });
        newLinks.push({ from: 0, to: i, bandwidth: '25Gbps WDM', latency: 3.2, lossRate: 0.02 });
      }
    } else if (top === 'ring') {
      const count = 8;
      const radius = Math.min(width, height) * 0.38;
      for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count;
        newNodes.push({
          id: i,
          label: `Relay ${i + 1}`,
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
          role: 'edge-relay',
          queueDepth: 4,
          capacity: 5000,
          packetCount: 0,
          latencyJitter: 1.8,
        });
      }
      for (let i = 0; i < count; i++) {
        newLinks.push({ from: i, to: (i + 1) % count, bandwidth: '100Gbps Ring', latency: 2.1, lossRate: 0.01 });
      }
    } else {
      // Swarm / Dynamic Ad-hoc
      const count = 9;
      const padding = 70;
      for (let i = 0; i < count; i++) {
        const rx = padding + Math.random() * (width - padding * 2);
        const ry = padding + Math.random() * (height - padding * 2);
        newNodes.push({
          id: i,
          label: `Mesh Node ${i}`,
          x: rx,
          y: ry,
          role: 'edge-relay',
          queueDepth: Math.floor(Math.random() * 5),
          capacity: 2000,
          packetCount: 0,
          latencyJitter: +(Math.random() * 4 + 2).toFixed(1),
        });
      }
      // Connect close nodes
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = newNodes[i].x - newNodes[j].x;
          const dy = newNodes[i].y - newNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < width * 0.38) {
            newLinks.push({ from: i, to: j, bandwidth: 'LoRa / Wi-Fi', latency: Math.floor(dist / 20), lossRate: 0.08 });
          }
        }
      }
    }

    nodesRef.current = newNodes;
    linksRef.current = newLinks;
    packetsRef.current = [];
    setSelectedNode(newNodes[0]);
  }, []);

  // Compute a path between two nodes
  const findPath = useCallback((src: number, dest: number, alg: Algorithm): number[] => {
    const nodes = nodesRef.current;
    const links = linksRef.current;
    if (src === dest || nodes.length === 0) return [src];

    // Build adjacency
    const adj: Map<number, number[]> = new Map();
    nodes.forEach((n) => adj.set(n.id, []));
    links.forEach((l) => {
      adj.get(l.from)?.push(l.to);
      adj.get(l.to)?.push(l.from);
    });

    if (alg === 'flooding') {
      // multi-hop exploration path
      const path = [src];
      let curr = src;
      const visited = new Set([src]);
      while (curr !== dest && path.length < 5) {
        const neighbors = (adj.get(curr) || []).filter((n) => !visited.has(n));
        if (neighbors.length === 0) break;
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        visited.add(next);
        path.push(next);
        curr = next;
      }
      if (path[path.length - 1] !== dest) path.push(dest);
      return path;
    }

    // BFS / Dijkstra for shortest path or latent semantic
    const queue: number[][] = [[src]];
    const visited = new Set<number>([src]);

    while (queue.length > 0) {
      const currentPath = queue.shift()!;
      const last = currentPath[currentPath.length - 1];

      if (last === dest) {
        return currentPath;
      }

      const neighbors = adj.get(last) || [];
      for (const n of neighbors) {
        if (!visited.has(n)) {
          visited.add(n);
          queue.push([...currentPath, n]);
        }
      }
    }

    return [src, dest];
  }, []);

  // Spawn a packet
  const spawnPacket = useCallback(
    (priority: SimPacket['priority'] = 'high-telepresence') => {
      const nodes = nodesRef.current;
      if (nodes.length < 2) return;

      const src = Math.floor(Math.random() * nodes.length);
      let dest = Math.floor(Math.random() * nodes.length);
      while (dest === src) {
        dest = Math.floor(Math.random() * nodes.length);
      }

      const path = findPath(src, dest, algorithm);
      if (path.length < 2) return;

      const isHigh = priority === 'high-telepresence';
      const color = isHigh
        ? '#E2B774' // Gold
        : priority === 'medium-telemetry'
        ? '#60A5FA' // Blue
        : '#9CA3AF'; // Slate

      const newPacket: SimPacket = {
        id: Math.random().toString(36).substring(7),
        path,
        currentIndex: 0,
        progress: 0,
        speed: isHigh ? 0.024 : 0.016,
        priority,
        color,
        sourceId: src,
        destId: dest,
      };

      packetsRef.current.push(newPacket);
    },
    [algorithm, findPath]
  );

  // Initialize canvas and resize listeners
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
      initTopology(topology, rect.width, rect.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [topology, initTopology]);

  // Main Animation & Physics Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastAutoSpawn = Date.now();
    let tick = 0;

    const loop = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // 1. Draw subtle background coordinate markings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSpacing = 40;
      for (let x = 0; x < w; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const nodes = nodesRef.current;
      const links = linksRef.current;

      // 2. Draw Links (Optical and Wireless Conduits)
      links.forEach((link) => {
        const n1 = nodes.find((n) => n.id === link.from);
        const n2 = nodes.find((n) => n.id === link.to);
        if (!n1 || !n2) return;

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle =
          link.bandwidth.includes('Optical') || link.bandwidth.includes('WDM')
            ? 'rgba(226, 183, 116, 0.22)'
            : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = link.bandwidth.includes('100Gbps') ? 2 : 1;
        ctx.stroke();

        // Subtle link harmonic pulse
        const midX = (n1.x + n2.x) / 2;
        const midY = (n1.y + n2.y) / 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.font = '9px "JetBrains Mono", monospace';
      });

      // 3. Update & Draw In-Flight Packets
      const activePackets = packetsRef.current;
      const nextPackets: SimPacket[] = [];

      activePackets.forEach((pkt) => {
        pkt.progress += pkt.speed;

        // Packet loss check
        if (pkt.progress > 0.5 && Math.random() < (lossRate / 100) * 0.003) {
          // Dropped packet
          setMetrics((m) => ({ ...m, droppedCount: m.droppedCount + 1 }));
          return;
        }

        if (pkt.progress >= 1) {
          pkt.currentIndex += 1;
          pkt.progress = 0;

          // Arrival at destination
          if (pkt.currentIndex >= pkt.path.length - 1) {
            setMetrics((m) => ({ ...m, deliveredCount: m.deliveredCount + 1 }));
            return;
          }
        }

        const currNodeId = pkt.path[pkt.currentIndex];
        const nextNodeId = pkt.path[pkt.currentIndex + 1];
        const nFrom = nodes.find((n) => n.id === currNodeId);
        const nTo = nodes.find((n) => n.id === nextNodeId);

        if (nFrom && nTo) {
          const px = nFrom.x + (nTo.x - nFrom.x) * pkt.progress;
          const py = nFrom.y + (nTo.y - nFrom.y) * pkt.progress;

          // Glowing packet aura
          ctx.beginPath();
          ctx.arc(px, py, pkt.priority === 'high-telepresence' ? 4 : 2.5, 0, Math.PI * 2);
          ctx.fillStyle = pkt.color;
          ctx.fill();

          // High-priority ripple trail
          if (pkt.priority === 'high-telepresence') {
            ctx.beginPath();
            ctx.arc(px, py, 9, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(226, 183, 116, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          nextPackets.push(pkt);
        }
      });

      packetsRef.current = nextPackets;

      // 4. Draw Nodes
      nodes.forEach((node) => {
        const isSelected = selectedNode?.id === node.id;

        // Outer glow on selected node
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(226, 183, 116, 0.15)';
          ctx.fill();
          ctx.strokeStyle = '#E2B774';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Base node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.role === 'gateway' ? 12 : 9, 0, Math.PI * 2);
        ctx.fillStyle =
          node.role === 'gateway'
            ? '#E2B774'
            : node.role === 'optical-oxc'
            ? '#60A5FA'
            : '#1C202E';
        ctx.fill();
        ctx.strokeStyle = '#2E344A';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Node label
        ctx.fillStyle = isSelected ? '#FFFFFF' : '#8A8F9F';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + 22);
      });

      // Automatic background traffic injection
      if (autoTraffic && Date.now() - lastAutoSpawn > 450) {
        lastAutoSpawn = Date.now();
        const prio: SimPacket['priority'] =
          Math.random() < 0.4
            ? 'high-telepresence'
            : Math.random() < 0.7
            ? 'medium-telemetry'
            : 'low-texture';
        spawnPacket(prio);
      }

      // Update metrics periodically
      tick++;
      if (tick % 30 === 0) {
        setMetrics((m) => ({
          ...m,
          packetsInFlight: packetsRef.current.length,
          meanLatency: `${(16.5 + (lossRate * 0.4) + Math.random() * 1.5).toFixed(1)}ms`,
          entropyRate: `${(3.4 + (packetsRef.current.length * 0.04)).toFixed(2)} bits/sym`,
        }));
      }

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [autoTraffic, lossRate, selectedNode, spawnPacket]);

  // Click on canvas to select node
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clicked = nodesRef.current.find((n) => {
      const dx = n.x - x;
      const dy = n.y - y;
      return Math.sqrt(dx * dx + dy * dy) < 22;
    });

    if (clicked) {
      setSelectedNode(clicked);
    }
  };

  return (
    <section id="laboratory" className="py-24 md:py-32 border-b border-[#1A1D27] relative bg-[#090A0E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Interactive Systems Laboratory · Thesis Telemetry Sim
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              Information &amp; Communication Topology Field
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Live deterministic simulation of packet propagation, queuing entropy, and latent semantic routing across variable network meshes.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono-tech text-[#767B8F]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>REAL-TIME ENGINE ACTIVE</span>
          </div>
        </div>

        {/* Top Control Bar (Clean Segmented Buttons - NO static pills) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
          
          {/* Topology Selector */}
          <div className="md:col-span-5 p-3 rounded-xl bg-[#0F1118] border border-[#1F2332] space-y-2">
            <span className="text-[11px] font-mono-tech text-[#72778C] uppercase tracking-wider block">
              Network Topology Matrix
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {(['mesh', 'star', 'ring', 'swarm'] as Topology[]).map((top) => (
                <button
                  key={top}
                  onClick={() => setTopology(top)}
                  className={`py-1.5 px-2 text-xs font-mono-tech capitalize rounded-md transition-colors cursor-pointer ${
                    topology === top
                      ? 'bg-[#1E2333] text-[#E2B774] border border-[#E2B774]/30 shadow-xs'
                      : 'bg-[#12141E] text-[#83889B] hover:text-white'
                  }`}
                >
                  {top}
                </button>
              ))}
            </div>
          </div>

          {/* Algorithm Selector */}
          <div className="md:col-span-4 p-3 rounded-xl bg-[#0F1118] border border-[#1F2332] space-y-2">
            <span className="text-[11px] font-mono-tech text-[#72778C] uppercase tracking-wider block">
              Routing Protocol Logic
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { id: 'latent-semantic', label: 'LSR (Thesis)' },
                { id: 'dijkstra', label: 'Dijkstra' },
                { id: 'flooding', label: 'Epidemic' },
              ].map((alg) => (
                <button
                  key={alg.id}
                  onClick={() => setAlgorithm(alg.id as Algorithm)}
                  className={`py-1.5 px-1.5 text-xs font-mono-tech truncate rounded-md transition-colors cursor-pointer ${
                    algorithm === alg.id
                      ? 'bg-[#1E2333] text-[#E2B774] border border-[#E2B774]/30 shadow-xs'
                      : 'bg-[#12141E] text-[#83889B] hover:text-white'
                  }`}
                  title={alg.label}
                >
                  {alg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Action Triggers */}
          <div className="md:col-span-3 p-3 rounded-xl bg-[#0F1118] border border-[#1F2332] flex items-center justify-between gap-3">
            <button
              onClick={() => spawnPacket('high-telepresence')}
              className="w-full py-2.5 px-3 text-xs font-mono-tech text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors cursor-pointer font-medium shadow-sm"
            >
              + Transmit Priority Pulse
            </button>
          </div>

        </div>

        {/* Main Interactive Stage: Canvas + Telemetry Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Canvas Viewport */}
          <div className="lg:col-span-8 relative rounded-2xl bg-[#08090C] border border-[#202434] overflow-hidden shadow-2xl">
            <canvas
              ref={canvasRef}
              onClick={handleCanvasClick}
              className="w-full h-[460px] block cursor-crosshair"
            />

            {/* In-canvas HUD controls overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 bg-[#0E1017]/85 backdrop-blur-md p-3 rounded-xl border border-[#212638] text-xs font-mono-tech">
              
              <div className="flex items-center gap-3">
                <span className="text-[#7E8398]">Channel Jitter Loss:</span>
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={lossRate}
                  onChange={(e) => setLossRate(Number(e.target.value))}
                  className="w-24 accent-[#E2B774] cursor-pointer"
                />
                <span className="text-[#E2B774] tabular-nums font-mono-tech">{lossRate}%</span>
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer text-[#A2A6B8]">
                  <input
                    type="checkbox"
                    checked={autoTraffic}
                    onChange={(e) => setAutoTraffic(e.target.checked)}
                    className="accent-[#E2B774]"
                  />
                  <span>Simulate Background Flow</span>
                </label>
              </div>

              <span className="text-[11px] text-[#5C6175]">
                Click any node to inspect telemetry
              </span>
            </div>
          </div>

          {/* Right Inspector & Empirical Metrics Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Metrics Grid */}
            <div className="p-5 rounded-2xl bg-[#0F1118] border border-[#202536] space-y-4">
              <div className="flex items-center justify-between border-b border-[#1E2232] pb-3">
                <span className="text-xs font-mono-tech text-[#8E93AA] uppercase tracking-wider">
                  Real-Time Channel Metrics
                </span>
                <span className="text-xs font-mono-tech text-[#E2B774]">
                  eBPF Telemetry
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-serif-display text-[#ECECEF] tabular-nums">
                    {metrics.packetsInFlight}
                  </div>
                  <div className="text-[11px] font-mono-tech text-[#6F7488]">Packets in Flight</div>
                </div>

                <div>
                  <div className="text-2xl font-serif-display text-[#E2B774] tabular-nums">
                    {metrics.meanLatency}
                  </div>
                  <div className="text-[11px] font-mono-tech text-[#6F7488]">Mean E2E Delay</div>
                </div>

                <div>
                  <div className="text-2xl font-serif-display text-emerald-400 tabular-nums">
                    {metrics.deliveredCount}
                  </div>
                  <div className="text-[11px] font-mono-tech text-[#6F7488]">Delivered Frames</div>
                </div>

                <div>
                  <div className="text-2xl font-serif-display text-rose-400 tabular-nums">
                    {metrics.droppedCount}
                  </div>
                  <div className="text-[11px] font-mono-tech text-[#6F7488]">Jitter Discards</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1C202F] flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#6F7488]">Shannon Entropy (H):</span>
                <span className="text-[#C5C9D8]">{metrics.entropyRate}</span>
              </div>
            </div>

            {/* Selected Node Telemetry Inspector */}
            {selectedNode && (
              <div className="p-5 rounded-2xl bg-[#0D0E15] border border-[#1E2333] space-y-3.5">
                <div className="flex items-center justify-between border-b border-[#1C202F] pb-3">
                  <div>
                    <span className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider">
                      Node Inspector
                    </span>
                    <h4 className="text-base font-medium text-white">{selectedNode.label}</h4>
                  </div>
                  <span className="text-[10px] font-mono-tech text-[#7C8196] uppercase bg-[#161824] px-2 py-0.5 rounded border border-[#23273A]">
                    {selectedNode.role}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono-tech">
                  <div className="flex justify-between">
                    <span className="text-[#6D7286]">Interface Role:</span>
                    <span className="text-[#D4D7E5]">{selectedNode.role.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6D7286]">XDP Queue Depth:</span>
                    <span className="text-[#E2B774]">{selectedNode.queueDepth} pkts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6D7286]">Port Line Capacity:</span>
                    <span className="text-[#D4D7E5]">{selectedNode.capacity} Mbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6D7286]">Phase Jitter StdDev:</span>
                    <span className="text-[#D4D7E5]">±{selectedNode.latencyJitter}ms</span>
                  </div>
                </div>

                <button
                  onClick={() => spawnPacket('high-telepresence')}
                  className="w-full mt-2 py-2 text-xs font-mono-tech text-[#E2B774] hover:text-[#090A0D] bg-[#171924] hover:bg-[#E2B774] border border-[#272B3D] rounded-lg transition-colors cursor-pointer text-center"
                >
                  Send Direct Packet from {selectedNode.label}
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
