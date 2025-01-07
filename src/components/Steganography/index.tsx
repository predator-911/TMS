import React, { useState } from 'react';
import FileUpload from '../ui/FileUpload';
import MessageInput from './MessageInput';

export default function Steganography() {
  const [message, setMessage] = useState('');
  const [isEncoding, setIsEncoding] = useState(false);
  const [isDecoding, setIsDecoding] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
        <FileUpload
          onFileSelect={setSelectedFile}
          accept="image/*"
          maxSize={10 * 1024 * 1024}
        />
        <MessageInput
          message={message}
          onMessageChange={setMessage}
          onEncode={handleEncode}
          onDecode={handleDecode}
          isEncoding={isEncoding}
          isDecoding={isDecoding}
        />
      </div>
    </div>
  );
}