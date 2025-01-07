import React from 'react';
import { ImageDown, Lock, Unlock, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: ImageDown,
    title: 'Generate Images',
    description: 'Create unique images from text descriptions using AI.',
    link: '/generate',
  },
  {
    icon: Lock,
    title: 'Hide Messages',
    description: 'Securely embed secret messages within images.',
    link: '/embed',
  },
  {
    icon: Unlock,
    title: 'Decode Messages',
    description: 'Extract hidden messages from steganographic images.',
    link: '/decode',
  },
  {
    icon: BookOpen,
    title: 'Learn More',
    description: 'Understand how steganography works and its applications.',
    link: '/guide',
  },
];

export default function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  );
}