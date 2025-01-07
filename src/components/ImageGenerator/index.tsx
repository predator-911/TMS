import React, { useState } from 'react';
import ImagePrompt from './ImagePrompt';

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
      <ImagePrompt
        prompt={prompt}
        onPromptChange={setPrompt}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
      />
    </div>
  );
}