import React from "react";
import { motion } from "framer-motion";
import "../styles/components.css";

export default function About() {
  return (
    <section className="about-hero">
      <div className="about-wrapper">

        {/* LEFT SIDE TEXT */}
        <div className="about-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="about-title"
          >
            You Create <span className="divider">|</span> I Edit
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            viewport={{ once: true }}
            className="about-script"
          >
            your brand grows
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            viewport={{ once: true }}
            className="about-desc"
          >
            Turn raw clips into scroll-stopping, on-brand videos that drive views,
            clients, and brand deals — without the editing stress.
          </motion.p>

          <motion.a
            href="#contact"
            className="about-btn"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>↗</span> Contact Me
          </motion.a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="about-image-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <img src="/assets/about.jpg" alt="editor working" />
        </motion.div>

      </div>
    </section>
  );
}
