import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const types = ['Text', 'Image', 'Audio'];

export default function StegTypes() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {types.map((type) => (
        <Card key={type} className="transform transition-all duration-300">
          <h3 className="font-semibold text-gray-900 mb-2">
            {type} Steganography
          </h3>
          <p className="text-sm text-gray-600">
            Hide messages within {type.toLowerCase()} files without raising
            suspicion.
          </p>
        </Card>
      ))}
    </div>
  );
}