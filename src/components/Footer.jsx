import React from 'react';
import '../styles/components.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Aestro Editz — Made with ❤️</p>
    </footer>
  );
}
