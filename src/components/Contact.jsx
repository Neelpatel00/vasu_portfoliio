import React from 'react';
import '../styles/components.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h3>Let's Connect</h3>
        <p style={{ color: 'var(--muted)' }}>Interested in working together? Send a message and we’ll talk through your project.</p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="btn" href="mailto:anshpagi111@gmail.com">Email</a>
          <a className="btn" href="https://wa.me/">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
