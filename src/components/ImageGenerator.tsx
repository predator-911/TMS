import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // TODO: Implement image generation
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Generate Image</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
            Enter your prompt
          </label>
          <textarea
            id="prompt"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Describe the image you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <button
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Wand2 className="w-4 h-4 mr-2" />
          {isGenerating ? 'Generating...' : 'Generate Image'}
        </button>
      </div>
    </div>
  );
}