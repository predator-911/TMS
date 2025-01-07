import React from 'react';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import { Wand2 } from 'lucide-react';

interface ImagePromptProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export default function ImagePrompt({
  prompt,
  onPromptChange,
  onGenerate,
  isGenerating
}: ImagePromptProps) {
  return (
    <div className="space-y-4">
      <TextArea
        label="Enter your prompt"
        id="prompt"
        rows={3}
        placeholder="Describe the image you want to generate..."
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
      />
      <Button
        onClick={onGenerate}
        disabled={!prompt || isGenerating}
        icon={Wand2}
        isLoading={isGenerating}
      >
        Generate Image
      </Button>
    </div>
  );
}