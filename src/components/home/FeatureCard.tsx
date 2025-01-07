import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import Card from '../ui/Card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({ icon: Icon, title, description, link }: FeatureCardProps) {
  return (
    <Link to={link}>
      <Card className="h-full transition-all duration-300">
        <Icon className="h-12 w-12 text-indigo-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </Link>
  );
}