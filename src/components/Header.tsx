import React from 'react';
import { ImageDown, Lock, MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Text-to-Image Steganography
        </h1>
        <div className="mt-4 flex space-x-8">
          <div className="flex items-center space-x-2">
            <ImageDown className="w-5 h-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Generate Images</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Hide Messages</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Decode Secrets</span>
          </div>
        </div>
      </div>
    </header>
  );
}