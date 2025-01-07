import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ImageGenerator from './components/ImageGenerator';
import Steganography from './components/Steganography';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<ImageGenerator />} />
          <Route path="/embed" element={<Steganography />} />
          <Route path="/decode" element={<Steganography />} />
          <Route path="/guide" element={<div>Guide Page</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;