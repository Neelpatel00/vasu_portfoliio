import React from "react";
import { motion } from "framer-motion";
import "../styles/components.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* TOP 50% SMOKE VIDEO */}
      <div className="video-half top-half">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/assets/smoke.mp4" type="video/mp4" />
        </video>
      </div>

      {/* BOTTOM 50% SKY VIDEO */}
      <div className="video-half bottom-half">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/assets/sky.mp4" type="video/mp4" />
        </video>
      </div>
      {/* CONTENT */}
      <div className="hero-content">
        {/* PROFILE LOGO */}
        <motion.div className="hero-logo" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <img src="/assets/profile.jpg" alt="logo" />
        </motion.div>

        {/* STATUS */}
        <div className="hero-status">
          <span className="dot"></span>
          available for work
        </div>

        {/* NAME */}
        <h1 className="hero-title">
          Astro <span className="script">Editz</span>
        </h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle">Video Editor Based in India</p>

        {/* SOCIAL ICONS */}
        <div className="social-row">
          <a href="https://x.com/AestroEdits_7?t=kI280hav75cHYwFss8H5DA&s=08">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/aestroedits_7/?utm_source=qr#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#contact">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>

        {/* BUTTON */}
        <a href="#contact" className="contact-btn">
          ↗ Contact Me
        </a>
      </div>
    </section>
  );
}
