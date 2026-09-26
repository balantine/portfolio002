import { Project, Publication, EducationEntry, ExperienceEntry, ThesisData } from '../types/portfolio';

export const THESIS_DATA: ThesisData = {
  title: "Latent Semantic Routing & Synchronous Telepresence",
  subtitle: "In Ultra-Dense Multi-Hop Optical & Wireless Mesh Topologies",
  candidate: "Julian Vance",
  institution: "Institute for Advanced Telecommunications & Media Technology",
  department: "Department of Information and Communication Technology",
  defenseDate: "May 28, 2026",
  advisors: [
    {
      name: "Prof. Marcus Sterling, Ph.D.",
      title: "Chair of Networked Distributed Systems",
      lab: "Distributed Infrastructure & Quantum Comms Lab"
    },
    {
      name: "Dr. Helena Rossi, Sc.D.",
      title: "Associate Professor of Human-Computer Tele-Perception",
      lab: "Computational Media & Spatial Acoustics Lab"
    }
  ],
  committee: [
    { name: "Prof. Aris Thorne", role: "Committee Chair", institution: "ETH Zurich / External" },
    { name: "Prof. Marcus Sterling", role: "Primary Thesis Advisor", institution: "Institute of Telecommunications" },
    { name: "Dr. Helena Rossi", role: "Co-Advisor", institution: "Center for Media Computation" },
    { name: "Dr. Claire Wu", role: "Industry Evaluator", institution: "Bell Labs Network Architecture" }
  ],
  abstract:
    "Next-generation telepresence requires continuous bidirectional multi-sensory synchronization under 50 milliseconds across variable-topology mesh networks. This thesis introduces Latent Semantic Routing (LSR), an adaptive transport layer architecture that decomposes high-dimensional spatial audio, volumetric point clouds, and haptic telemetry into semantically weighted packet vectors. By leveraging programmable eBPF datapaths and continuous hop-level queuing estimates, LSR prioritizes perceptually critical perceptual features during transient congestion periods. In our 64-node physical testbed across heterogeneous optical backhauls and 60GHz wireless links, LSR achieves a 41.6% reduction in perceptual jitter and maintains synchronized spatial coherence at 99.8th percentile link saturation.",
  motivation:
    "Traditional transport architectures treat all payload bytes as uniformly homogeneous. In immersive telepresence, however, a dropped audio harmonic or misplaced haptic impulse disrupts user presence far more catastrophically than a dropped background texture packet. Conventional congestion algorithms oscillate between bufferbloat and packet starvation; our framework synthesizes information theory with psychoacoustic perception thresholds to govern packet survival at the physical switch level.",
  methodology:
    "We designed and compiled an eBPF datapath module operating at the XDP (eXpress Data Path) layer on Linux kernels, paired with a custom Rust userspace scheduler. The system was validated across three operational regimes: (1) emulated NS-3 topology with 512 dynamic nodes, (2) physical hardware testbed of 16 optical routing appliances, and (3) double-blind perceptual evaluation tests with 40 human subjects engaging in collaborative spatial acoustic manipulation.",
  innovations: [
    "Perceptual Entropy Metric (PEM): A closed-form mathematical weight computing packet drop penalty based on spatial human auditory masking models.",
    "eBPF-Accelerated Semantic Discard: Zero-copy in-kernel priority queue that enforces graceful perceptual degradation before socket buffers overflow.",
    "Sub-Millisecond Clock Dissemination: Enhanced PTP (Precision Time Protocol) over variable-hop mesh topologies yielding <1.4μs inter-node synchronization.",
    "Volumetric Point-Cloud Quantization: Variable-rate geometric compression dynamically throttled by available per-hop channel capacity."
  ],
  keyMetrics: [
    { label: "Perceptual Jitter Reduction", value: "41.6%", context: "Compared to vanilla BBRv2 & Cubic" },
    { label: "Sub-50ms End-to-End Latency", value: "99.4%", context: "Sustained across 7-hop mesh routing" },
    { label: "eBPF Datapath Overhead", value: "< 140ns", context: "Per-packet processing at line rate" },
    { label: "Channel Bandwidth Utilization", value: "94.2%", context: "Near theoretical Shannon capacity bound" }
  ],
  chapters: [
    {
      number: "01",
      title: "Foundations & Telepresence Axioms",
      pages: "pp. 1 – 42",
      synopsis: "Explores the physiological perceptual constraints of human sensory organs when interacting through networked telecommunications interfaces.",
      excerpts: "The human auditory system detects interaural time differences on the order of 10 microseconds, while visual vestibular alignment tolerates at most 20 milliseconds of latency before motion sickness emerges. When spatial telecommunications ignore these disparate psycho-physical time constants, uniform packet loss schemes trigger sensory dissonance."
    },
    {
      number: "02",
      title: "Semantic Packet Vector Formalism",
      pages: "pp. 43 – 98",
      synopsis: "Mathematical formulation of Latent Semantic Vectors (LSV), gradient descent on distributed queuing graphs, and Pareto-optimal channel slicing.",
      excerpts: "Let S = {s_1, s_2, ..., s_k} represent the multimodal sensory streams comprising the telepresence field. We define the perceptual loss functional L_p(P) as the expected sensory divergence experienced by the remote operator when packet set P is truncated by link capacity C_e."
    },
    {
      number: "03",
      title: "eBPF Kernel Datapath & System Architecture",
      pages: "pp. 99 – 164",
      synopsis: "Low-level implementation details of the Rust/C++ routing engine, memory layout, XDP driver mode, and hardware NIC offloading.",
      excerpts: "By hooking into the network interface driver before sk_buff allocation, the LSR classifier computes the 8-bit priority tag in 26 CPU cycles, permitting 100GbE wire-speed packet triage on commodity server architectures without dedicated ASIC silicon."
    },
    {
      number: "04",
      title: "Empirical Validation & Double-Blind User Trials",
      pages: "pp. 165 – 220",
      synopsis: "Comprehensive experimental results on the 64-node hardware testbed and statistical analysis of human participant trials.",
      excerpts: "Human participants engaged in collaborative virtual object positioning achieved task completion times 37% faster under LSR versus standard WebRTC under simulated 15% random packet burst loss, demonstrating the real-world cognitive benefit of perceptual prioritization."
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "synapse-mesh",
    title: "Synapse Mesh: P2P Visual Telemetry & Resilient Multipath Routing",
    subtitle: "Autonomous distributed mesh communication engine for extreme-loss disaster environments",
    year: "2025 – 2026",
    domain: "Distributed Systems & Telecommunications",
    readTime: "6 min read",
    featured: true,
    summary:
      "A peer-to-peer visual telemetry routing engine built for off-grid operations. Dynamically reconstructs topology maps, balances multi-commodity packet flows, and maintains low-latency situational video channels over fragmented Wi-Fi and 900MHz LoRa links.",
    challenge:
      "During natural disasters or infrastructure failure, cellular towers collapse, leaving responders with highly lossy, asymmetric, ad-hoc radio links where standard TCP/IP routing loops frequently fail.",
    architecture:
      "Developed a custom epidemic gossip routing protocol with Bloom-filter deduplication in Rust. Built WebRTC DataChannel relays with dynamic forward error correction (FEC) that scales parity packets inversely with signal-to-noise ratio (SNR).",
    results: [
      "Maintained 99.2% telemetry packet delivery across an 8-node physical ad-hoc cluster with 25% background packet loss.",
      "Zero central coordinator dependency: nodes discover peers in under 300ms using encrypted UDP broadcast beacons.",
      "Deployed and validated during the Regional Tactical Communications Field Exercise 2025."
    ],
    metrics: [
      { label: "Delivery Ratio", value: "99.2%" },
      { label: "Topology Convergence", value: "280ms" },
      { label: "Packet Overhead", value: "< 3.5%" }
    ],
    stack: ["Rust", "WebRTC", "eBPF", "Tokio", "TypeScript", "Protobuf", "Linux Socket API"],
    demoType: "network-routing"
  },
  {
    id: "aura-spatial",
    title: "Aura: Spatial Acoustic Telepresence & Haptic Synchronization",
    subtitle: "Zero-perceptible-latency binaural audio telemetry protocol over variable-jitter networks",
    year: "2025",
    domain: "Human-Computer Interaction & Audio DSP",
    readTime: "5 min read",
    featured: true,
    summary:
      "An open-source telepresence framework mapping 6-DoF spatial audio and vibrotactile haptic impulses over unpredictable consumer networks using neural packet interpolation and Head-Related Transfer Function (HRTF) acceleration.",
    challenge:
      "Spatial acoustic realism collapses when inter-channel phase discrepancies exceed 40 microseconds or when audio-haptic skew exceeds 15ms, destroying the tactile illusion of co-presence.",
    architecture:
      "Engineered a WebAudio AudioWorklet and SIMD-accelerated C++ DSP library. Implemented Kalman-filtered jitter buffer prediction and psychoacoustic mask concealment to hide dropped audio packets without pitch warping.",
    results: [
      "Achieved sub-18ms audio-to-haptic synchronization across transatlantic WAN links.",
      "Eliminated audible clicks and artifacts during packet burst loss up to 18% via generative phase reconstruction.",
      "Adopted by three university media research labs for collaborative musical tele-performance."
    ],
    metrics: [
      { label: "Audio-Haptic Skew", value: "< 2.1ms" },
      { label: "DSP Latency", value: "1.4ms" },
      { label: "Sample Rate", value: "96kHz / 24-bit" }
    ],
    stack: ["C++20", "WebAudio SIMD", "WebAssembly", "WebSockets", "HRTF Convolution", "Python"],
    demoType: "audio-haptics"
  },
  {
    id: "prism-optics",
    title: "Prism: Photonic Packet Scheduling & WDM Optical Conduit Sim",
    subtitle: "Interactive algorithmic simulator for Dense Wavelength Division Multiplexing optical networks",
    year: "2024 – 2025",
    domain: "Optical Communications & Algorithmic Routing",
    readTime: "7 min read",
    featured: false,
    summary:
      "A high-fidelity optical communication and photonic switch simulation platform. Visualizes laser wavelength allocations, chromatic dispersion compensation, and optical cross-connect (OXC) packet queues at 800Gbps channel densities.",
    challenge:
      "Modeling non-linear Kerr effects and four-wave mixing in dense optical fiber cables requires solving non-linear Schrödinger equations, which traditional network simulators approximate too coarsely.",
    architecture:
      "Built a GPU-accelerated split-step Fourier numerical solver in WebGL/Compute shaders and Rust. Interfaced with an interactive visual canvas that models optical amplifiers (EDFA), wavelength multiplexers, and optical reconfigurable OADM nodes.",
    results: [
      "Simulated 128 wavelength channels with 50GHz ITU grid spacing at real-time 60fps.",
      "Verified optical signal-to-noise ratio (OSNR) predictions against physical fiber test loop measurements within 0.4 dB error margin.",
      "Awarded Best Engineering Demonstration at the Regional Graduate Research Symposium."
    ],
    metrics: [
      { label: "Max Channel Count", value: "128 Wavelengths" },
      { label: "Emulated Throughput", value: "102.4 Tbps" },
      { label: "Solver Accuracy", value: "99.6%" }
    ],
    stack: ["Rust", "WebGL", "GLSL Shaders", "TypeScript", "Numerical FFT", "React"],
    demoType: "optical-prism"
  },
  {
    id: "veritas-ledger",
    title: "Veritas: Zero-Knowledge Verifiable Broadcast & Media Provenance",
    subtitle: "Cryptographic integrity verification for journalistic telecommunications and live media streams",
    year: "2024",
    domain: "Applied Cryptography & Media Systems",
    readTime: "5 min read",
    featured: false,
    summary:
      "A lightweight media provenance pipeline that generates succinct zero-knowledge proofs (zk-SNARKs) of camera sensor telemetry and digital signatures at the moment of packetization, neutralizing deepfake media injection in transit.",
    challenge:
      "Verifying authenticity of live broadcast streams across untrusted transit CDN nodes without revealing source geolocation or proprietary cryptographic sensor keys.",
    architecture:
      "Constructed a Circom circuit that verifies camera sensor attestations and frame hashes into a single constant-size Groth16 proof per media segment (1.2 seconds), verified on-chain or directly by client web browsers in under 12ms.",
    results: [
      "Sub-15ms proof verification latency in modern browser engines.",
      "Zero telemetry payload bloat: proof adds only 128 bytes per second to HLS/DASH media streams.",
      "Published as a student workshop paper at ACM Multimedia Security 2024."
    ],
    metrics: [
      { label: "Verification Time", value: "11.8ms" },
      { label: "Proof Size", value: "128 Bytes" },
      { label: "Tamper Detection", value: "100%" }
    ],
    stack: ["Circom", "SnarkJS", "Rust", "WebCrypto API", "HLS / WebRTC", "TypeScript"],
    demoType: "cryptography"
  },
  {
    id: "kinesics-edge",
    title: "Kinesics: Low-Bandwidth Non-Verbal Communication Synthesis",
    subtitle: "Edge computer vision model compressing video streams to 8kbps semantic micro-postures",
    year: "2023 – 2024",
    domain: "Computer Vision & Edge Computing",
    readTime: "4 min read",
    featured: false,
    summary:
      "A neural compression system for remote video communication in satellite and maritime environments with severely restricted bandwidth. Reconstructs lifelike facial expressions and gaze contact from 8kbps micro-vectors.",
    challenge:
      "Standard H.264/H.265 video codecs degrade into unwatchable macroblocks below 100kbps, severing human emotional cues in low-bandwidth rural and remote operations.",
    architecture:
      "Runs an ONNX-optimized lightweight 3D facial landmark model on edge hardware (NVIDIA Jetson / Apple Silicon) extracting 68 semantic keypoints and rigid head poses. The receiving client synthesizes realistic video via client-side neural radiance renderers.",
    results: [
      "Reduced bandwidth requirements by 94.6% compared to baseline VP9 at 360p.",
      "Preserved natural micro-expressions and mutual eye contact during double-blind communication assessment.",
      "Tested successfully over Iridium satellite links with 12kbps real-world throughput limits."
    ],
    metrics: [
      { label: "Bandwidth Used", value: "8.2 kbps" },
      { label: "Compression Ratio", value: "94.6%" },
      { label: "Inference Speed", value: "60 fps" }
    ],
    stack: ["PyTorch", "ONNX Runtime", "C++", "OpenCV", "MediaPipe", "WebRTC"],
    demoType: "computer-vision"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-01",
    title: "Latent Semantic Routing: Perceptual Entropy Datapaths for Immersive Telepresence",
    authors: "Julian Vance, Helena Rossi, Marcus Sterling",
    venue: "IEEE Transactions on Network and Service Management (TNSM)",
    year: 2026,
    doi: "10.1109/TNSM.2026.3409182",
    type: "Journal",
    abstract:
      "In this paper, we propose a mathematical and system-level framework for routing multimodal telepresence streams based on real-time perceptual entropy. We implement an eBPF datapath classifier that operates at wire-speed to selectively triage packets based on psychoacoustic and visual salience metrics, yielding significant latency stabilization under congestion.",
    citations: 14,
    bibtex: `@article{vance2026latent,
  title={Latent Semantic Routing: Perceptual Entropy Datapaths for Immersive Telepresence},
  author={Vance, Julian and Rossi, Helena and Sterling, Marcus},
  journal={IEEE Transactions on Network and Service Management},
  volume={23},
  number={2},
  pages={1120--1135},
  year={2026},
  publisher={IEEE},
  doi={10.1109/TNSM.2026.3409182}
}`
  },
  {
    id: "pub-02",
    title: "Synchronous Spatial Audio & Haptic Tele-Perception Across Fragmented Mesh Networks",
    authors: "Julian Vance, Helena Rossi",
    venue: "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)",
    year: 2025,
    doi: "10.1145/3610928.3610941",
    type: "Conference",
    abstract:
      "We investigate the perceptual bounds of human synchrony when manipulating collaborative spatial audio and tactile objects across jittery peer-to-peer mesh connections. We propose a predictive Kalman jitter buffer tailored to acoustic phase alignment and demonstrate its efficacy in double-blind participant trials.",
    citations: 28,
    bibtex: `@inproceedings{vance2025synchronous,
  title={Synchronous Spatial Audio & Haptic Tele-Perception Across Fragmented Mesh Networks},
  author={Vance, Julian and Rossi, Helena},
  booktitle={Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (IMWUT)},
  volume={9},
  number={3},
  pages={1--22},
  year={2025},
  doi={10.1145/3610928.3610941}
}`
  },
  {
    id: "pub-03",
    title: "Zero-Knowledge Media Provenance for Live Telecommunication Channels",
    authors: "Julian Vance, Aris Thorne, Claire Wu",
    venue: "ACM Conference on Computer and Communications Security (CCS) Workshop on MMSP",
    year: 2024,
    doi: "10.1145/3548606.3563914",
    type: "Workshop",
    abstract:
      "Presents an end-to-end cryptographic pipeline verifying the sensor capture integrity of live streaming video frames using constant-size zk-SNARKs, preventing real-time deepfake injection into public safety and journalism transmissions.",
    citations: 9,
    bibtex: `@inproceedings{vance2024zkprovenance,
  title={Zero-Knowledge Media Provenance for Live Telecommunication Channels},
  author={Vance, Julian and Thorne, Aris and Wu, Claire},
  booktitle={ACM CCS Workshop on Multimedia Security & Provenance},
  pages={45--52},
  year={2024},
  doi={10.1145/3548606.3563914}
}`
  },
  {
    id: "pub-04",
    title: "Dynamic Forward Error Correction in Heterogeneous Low-Power Mesh Topologies",
    authors: "Julian Vance, Marcus Sterling",
    venue: "IEEE International Conference on Distributed Computing Systems (ICDCS) Poster",
    year: 2024,
    doi: "10.1109/ICDCS.2024.00118",
    type: "Conference",
    abstract:
      "Explores adaptive Reed-Solomon and Cauchy-distribution fountain codes that adjust parity overhead dynamically based on moving-window Signal-to-Interference-plus-Noise Ratio (SINR) in multi-hop municipal radio links.",
    citations: 6,
    bibtex: `@inproceedings{vance2024dynamicfec,
  title={Dynamic Forward Error Correction in Heterogeneous Low-Power Mesh Topologies},
  author={Vance, Julian and Sterling, Marcus},
  booktitle={IEEE ICDCS Poster Proceedings},
  pages={118--120},
  year={2024}
}`
  }
];

export const EDUCATION_DATA: EducationEntry[] = [
  {
    degree: "Master of Science in Information & Communication Technology",
    institution: "Institute for Advanced Telecommunications & Media Technology",
    location: "Zurich / Boston",
    period: "2024 – 2026",
    gpa: "4.0 / 4.0 (Summa Cum Laude / Distinction Candidate)",
    focus: "Distributed Communication Systems, Spatial Telepresence & High-Throughput Network Protocols",
    honors: [
      "Departmental Graduate Research Fellowship (2024 – 2026)",
      "Best Graduate Demonstration Award, Regional ICT Symposium (2025)",
      "IEEE Communications Society Graduate Student Member"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Engineering & Telecommunications",
    institution: "State University School of Engineering & Applied Sciences",
    location: "San Francisco, CA",
    period: "2020 – 2024",
    gpa: "3.94 / 4.0 (Dean's Honor List all semesters)",
    focus: "Network Architecture, Embedded Systems & Signal Processing",
    honors: [
      "Valedictorian Nominee & Senior Capstone First Prize",
      "National Science Foundation Undergraduate Research Fellow (REU)"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    role: "Graduate Research Assistant",
    organization: "Distributed Infrastructure & Computational Media Lab",
    period: "2024 – Present",
    location: "Zurich / Boston",
    description: [
      "Designed and deployed the 64-node physical mesh network testbed used to evaluate high-throughput telepresence protocols.",
      "Engineered Linux kernel eBPF modules running at the XDP level to triage packet queues under multi-gigabit throughput.",
      "Co-authored 3 peer-reviewed research papers in IEEE and ACM journals and conferences."
    ],
    skills: ["Rust", "eBPF / XDP", "C++", "Linux Kernel", "NS-3", "P2P Protocols"]
  },
  {
    role: "Graduate Teaching Assistant",
    organization: "Department of Information and Communication Technology",
    period: "2024 – 2026",
    location: "Zurich / Boston",
    description: [
      "ICT 502: Advanced Distributed Network Architecture (Graduate level, 45 students). Led laboratory sessions on QUIC internals, BGP routing, and congestion control algorithms.",
      "ICT 315: Telepresence, Spatial Media & Audio Computation (Undergraduate, 60 students). Mentored 12 team capstones on real-time WebRTC and spatial acoustic DSP."
    ],
    skills: ["Curriculum Design", "Laboratory Instruction", "Code Review", "Mentorship"]
  },
  {
    role: "Systems & Network Architecture Research Intern",
    organization: "Bell Labs / Telecommunications Innovation Center",
    period: "Summer 2025",
    location: "Murray Hill, NJ",
    description: [
      "Investigated sub-millisecond clock dissemination over variable-delay optical-wireless edge relays.",
      "Implemented hardware timestamping integration on high-speed FPGA network interface cards.",
      "Presented findings to global senior research fellows, resulting in one pending patent application."
    ],
    skills: ["Precision Time Protocol (PTP)", "FPGA Timestamping", "C++", "Optical Switching"]
  }
];

export const TECHNICAL_SKILLS = {
  protocols: [
    "eBPF / XDP Datapaths",
    "WebRTC (SCTP & DataChannels)",
    "QUIC & HTTP/3",
    "BGP & Multi-Commodity Routing",
    "IEEE 1588 Precision Time Protocol",
    "MQTT & CoAP (IoT Edge)",
    "P2P Gossip & Epidemic Routing",
    "Dense WDM Optical Protocols"
  ],
  engineering: [
    "Rust (Tokio, Actix, SIMD)",
    "C++20 (Networking, Audio DSP)",
    "Linux Systems & Kernel Sockets",
    "TypeScript & React 19",
    "WebGL & GLSL Shader Programming",
    "Python & PyTorch (Audio/Vision)",
    "Docker, Kubernetes, Terraform",
    "Wireshark, tcpdump, perf"
  ],
  theoretical: [
    "Information Theory & Shannon Entropy",
    "Queuing Theory & M/M/1/K Analysis",
    "Rate-Distortion Theory",
    "Binaural Psychoacoustics & HRTF",
    "Zero-Knowledge Proofs (Groth16)",
    "Kalman Filtering & Jitter Prediction"
  ]
};
