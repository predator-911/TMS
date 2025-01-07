import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}