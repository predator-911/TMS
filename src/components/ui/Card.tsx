import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}