import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components.css';

const reviews = [
  { id: 1, author: 'Happy Creator', text: 'Astro delivered the edits on time and the views jumped immediately.' },
  { id: 2, author: 'Brand Co', text: 'A smooth process — great communication and final quality.' },
  { id: 3, author: 'Channel Owner', text: 'Creative cuts and strong pacing, highly recommended.' }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <div className="container">
        <h3>Trusted by</h3>
        <div className="testimonials-grid" style={{ marginTop: 12 }}>
          {reviews.map((r, idx) => (
            <motion.blockquote key={r.id} className="testimonial"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <p style={{ margin: 0, color: 'var(--muted)' }}>{r.text}</p>
              <cite style={{ display: 'block', marginTop: 8, fontWeight: 700 }}>{r.author}</cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
