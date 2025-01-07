import React, { useState } from 'react';
import { Upload, Lock, Unlock } from 'lucide-react';

export default function Steganography() {
  const [message, setMessage] = useState('');
  const [isEncoding, setIsEncoding] = useState(false);
  const [isDecoding, setIsDecoding] = useState(false);

  const handleEncode = async () => {
    setIsEncoding(true);
    // TODO: Implement message encoding
    setTimeout(() => setIsEncoding(false), 2000);
  };

  const handleDecode = async () => {
    setIsDecoding(true);
    // TODO: Implement message decoding
    setTimeout(() => setIsDecoding(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hide & Decode Messages</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Secret Message
          </label>
          <textarea
            id="message"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter your secret message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleEncode}
            disabled={!message || isEncoding}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Lock className="w-4 h-4 mr-2" />
            {isEncoding ? 'Encoding...' : 'Encode Message'}
          </button>
          <button
            onClick={handleDecode}
            disabled={isDecoding}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Unlock className="w-4 h-4 mr-2" />
            {isDecoding ? 'Decoding...' : 'Decode Message'}
          </button>
        </div>
      </div>
    </div>
  );
}