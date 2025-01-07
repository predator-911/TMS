import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  isLoading,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "border-transparent text-white bg-indigo-600 hover:bg-indigo-700",
    secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && !isLoading && <Icon className="w-4 h-4 mr-2" />}
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
}