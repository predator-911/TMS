import React from 'react';
import { motion } from 'framer-motion';
import Features from '../components/home/Features';
import StegTypes from '../components/home/StegTypes';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Text-to-Image Steganography
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create, hide, and decode secret messages within AI-generated images using
          advanced steganography techniques.
        </p>
      </motion.div>

      <Features />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 bg-gray-50 rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What is Steganography?
        </h2>
        <p className="text-gray-600 mb-4">
          Steganography is the art of hiding information in plain sight. Unlike
          encryption, which makes data unreadable, steganography conceals the very
          existence of the message within seemingly normal files.
        </p>
        <StegTypes />
      </motion.section>
    </div>
  );
}