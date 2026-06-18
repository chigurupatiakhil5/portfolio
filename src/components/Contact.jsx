"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaCopy, FaCheck } from "react-icons/fa";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
};

const EMAIL    = "chigurupati.akhil5@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/akhil-chigurupati-31b9ba255/";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">

        {/* ── Heading ───────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="font-sans text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-main mb-4">
            Contact Me
          </h2>
          <p className="font-sans text-text-main/60 text-lg leading-relaxed">
            I&apos;m open to new opportunities, collaborations, and conversations.
            Feel free to reach out — I&apos;ll get back to you.
          </p>
        </motion.div>

        {/* ── Contact buttons ───────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          {/* Email with copy button */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-0 bg-surface border border-secondary/30 rounded-xl overflow-hidden hover:border-primary/40 transition-colors duration-200"
          >
            <div className="flex items-center gap-3 px-5 py-3.5">
              <FaEnvelope className="text-primary flex-shrink-0" />
              <span className="font-sans text-sm text-text-main font-medium">
                {EMAIL}
              </span>
            </div>
            <button
              onClick={handleCopy}
              className="px-4 py-3.5 bg-primary/10 hover:bg-primary/20 border-l border-secondary/30 transition-colors duration-200 flex items-center gap-1.5 text-primary"
              aria-label="Copy email"
            >
              {copied ? (
                <FaCheck className="text-sm" />
              ) : (
                <FaCopy className="text-sm" />
              )}
              <span className="font-sans text-xs font-semibold">
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </motion.div>

          {/* LinkedIn button */}
          <motion.a
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-primary text-white font-sans font-semibold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors duration-200"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
