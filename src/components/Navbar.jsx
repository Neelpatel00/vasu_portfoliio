import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/components.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header className="site-navbar" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
      {/* FULL WIDTH NAVBAR */}
      <div className="nav-inner w-full" style={{ paddingLeft: 20, paddingRight: 20 }}>
        <div className="logo">
          <img src="/assets/profile.jpg" alt="logo" className="logo-img" />
          <div>
            <div className="brand">Aestro Editz</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>Video Editor</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#faqs">Faqs</a>
          <a className="cta" href="#contact">
            <i className="fa fa-whatsapp"></i> Contact Us
          </a>
        </nav>

        <button className="mobile-toggle" aria-label="toggle menu" onClick={() => setOpen((s) => !s)}>
          <i className={`fa ${open ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.18 }} className="mobile-nav">
          <div
            className="nav-inner"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "12px 20px",
              borderTop: "1px solid rgba(255,255,255,0.03)",
            }}
          >
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#faqs">Faqs</a>
            <a className="cta" href="#contact">
              <i className="fa fa-whatsapp"></i> Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
