import { LucideIcon } from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
}

export const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/generate', label: 'Generate Image' },
  { path: '/embed', label: 'Embed Secret Text' },
  { path: '/decode', label: 'Decode Secret Text' },
  { path: '/guide', label: 'Guide' },
];