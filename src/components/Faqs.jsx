import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components.css";

export default function Faqs() {
  const faqs = [
    {
      q: "Can you match my style and brand?",
      a: `Absolutely — I don't just edit, I adapt. Whether your vibe is clean and minimal 
      or loud and high-energy, I shape the visuals to feel like you. Before we start, 
      I’ll ask the right questions and reference what's already working in your content — 
      so every frame reflects your voice, not mine.`,
    },
    {
      q: "Will working with you save me time?",
      a: `Yes. I take the entire editing pipeline off your hands — from pacing, color 
      grading, and refining cuts to delivering ready-to-post videos.`,
    },
    {
      q: "What results can I expect from your edits?",
      a: `Clean visuals, strong pacing, better flow, and videos crafted to boost viewer 
      retention so your audience stays hooked.`,
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section" id="faqs">
      {/* LEFT TEXT */}
      <div className="faq-left">
        <h2 className="faq-title">
          Your Questions <span>Answered</span>
        </h2>

        <p className="faq-sub">Find the answers to our most common questions here, but if you still need help, feel free to contact me.</p>

        <a href="#contact" className="faq-btn">
          <i className="fa-solid fa-arrow-right"></i> Contact Me
        </a>
      </div>

      {/* FAQ ACCORDION */}
      <div className="faq-right">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;

          return (
            <motion.div key={idx} className={`faq-card ${isOpen ? "open" : ""}`} onClick={() => setOpen(isOpen ? null : idx)} initial={false} animate={{ height: "auto" }}>
              <div className="faq-question">
                {item.q}

                <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-plus"}`}></i>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.p className="faq-answer" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
