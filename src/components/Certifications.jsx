"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward, FaExternalLinkAlt, FaBookOpen } from "react-icons/fa";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
};

const certifications = [
  {
    name:         "Agentic AI and AI Agents for Leaders",
    issuer:       "Vanderbilt University",
    credentialId: "0E0Y1DPM3ZCM",
    issued:       "2026",
    image:        "/certificates/vanderbilt-agentic-ai.jpg",
  },
  {
    name:         "Prompt Engineering for ChatGPT",
    issuer:       "Vanderbilt University",
    credentialId: null,
    issued:       "2026",
    image:        "/certificates/vanderbilt-prompt-engineering.jpg",
  },
  {
    name:         "OpenAI GPTs: Creating Your Own Custom AI Assistants",
    issuer:       "Vanderbilt University",
    credentialId: null,
    issued:       "2026",
    image:        "/certificates/vanderbilt-openai-gpts.jpg",
  },
  {
    name:         "AI Fluency Framework & Foundations",
    issuer:       "Anthropic",
    credentialId: "d3ktefntdytc",
    issued:       "2026",
    image:        "/certificates/anthropic-ai-fluency.jpg",
  },
  {
    name:         "Claude 101",
    issuer:       "Anthropic",
    credentialId: "zdyhji2k6ovi",
    issued:       "2026",
    image:        "/certificates/anthropic-claude-101.jpg",
  },
  {
    name:         "Basics of Data Structures and Algorithms",
    issuer:       "Simplilearn",
    credentialId: "10300657",
    issued:       "2026",
    image:        "/certificates/simplilearn-dsa.jpg",
  },
];

const publication = {
  title:
    "Uncovering the Truth: A Machine Learning Approach to Detect Fake Product Reviews and Analyze Sentiment",
  publisher:   "Springer, Cham",
  date:        "Feb 14, 2025",
  description:
    "Developed a machine learning and NLP-based system to detect and eliminate fake product reviews in e-commerce platforms using ensemble models including Random Forest, Naive Bayes, MLP, and Voting Classifier. Achieved 92% precision across 10 major review platforms.",
  link:        "https://link.springer.com/chapter/10.1007/978-3-031-74885-1_20",
};

function CertCard({ cert, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="bg-background rounded-2xl border border-secondary/30 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden group"
    >
      {/* Certificate image or placeholder */}
      <div className="relative w-full h-40 bg-surface overflow-hidden">
        {!imgError ? (
          <Image
            src={cert.image}
            alt={cert.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Placeholder shown when image file doesn't exist yet */
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
              <FaAward className="text-primary text-xl" />
            </div>
            <span className="font-sans text-xs text-text-main/40 text-center px-4">
              {cert.issuer}
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <p className="font-sans text-xs font-semibold text-primary uppercase tracking-wide mb-1">
          {cert.issuer}
        </p>
        <h3 className="font-heading text-sm font-bold text-text-main leading-snug mb-3">
          {cert.name}
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-sans text-xs text-text-main/40">
            Issued {cert.issued}
          </span>
          {cert.credentialId && (
            <span className="font-sans text-xs text-text-main/40 font-mono">
              ID: {cert.credentialId}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Certifications ────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Credentials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-main">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </motion.div>

        {/* ── Publication ───────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Research
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-main">
            Publication
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl p-8 border border-secondary/30 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 max-w-3xl mx-auto"
        >
          {/* Springer badge */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-2 bg-primary text-white text-xs font-sans font-semibold px-3 py-1.5 rounded-full">
              <FaBookOpen />
              Published - Springer, Cham
            </div>
            <span className="font-sans text-xs text-text-main/40">
              {publication.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl font-bold text-text-main leading-snug mb-4">
            {publication.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-text-main/70 text-sm leading-relaxed mb-6">
            {publication.description}
          </p>

          {/* Link */}
          <a
            href={publication.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-colors duration-200"
          >
            <FaExternalLinkAlt />
            Read on Springer
          </a>
        </motion.div>

      </div>
    </section>
  );
}
