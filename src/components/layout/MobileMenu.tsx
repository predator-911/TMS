import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navItems } from '../../utils/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}