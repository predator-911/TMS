import React from 'react';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';
import { Lock, Unlock } from 'lucide-react';

interface MessageInputProps {
  message: string;
  onMessageChange: (message: string) => void;
  onEncode: () => void;
  onDecode: () => void;
  isEncoding: boolean;
  isDecoding: boolean;
}

export default function MessageInput({
  message,
  onMessageChange,
  onEncode,
  onDecode,
  isEncoding,
  isDecoding
}: MessageInputProps) {
  return (
    <div className="space-y-6">
      <TextArea
        label="Secret Message"
        id="message"
        rows={3}
        placeholder="Enter your secret message..."
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
      />
      <div className="flex space-x-4">
        <Button
          onClick={onEncode}
          disabled={!message || isEncoding}
          icon={Lock}
          isLoading={isEncoding}
        >
          Encode Message
        </Button>
        <Button
          onClick={onDecode}
          disabled={isDecoding}
          variant="secondary"
          icon={Unlock}
          isLoading={isDecoding}
        >
          Decode Message
        </Button>
      </div>
    </div>
  );
}