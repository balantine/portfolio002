import React from 'react';
import { motion } from 'framer-motion';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1], // Custom smooth editorial cubic-bezier
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
