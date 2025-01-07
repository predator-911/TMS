import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 md:mt-0">
          <p className="text-center text-base text-gray-500">
            Created by Lakshya Kumar • Enrollment Number: 00314813122 • 4th Year, MAIT
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}