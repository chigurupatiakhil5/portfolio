"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
};

const experiences = [
  {
    company:   "Tata Consultancy Services",
    badge:     "TCS",
    role:      "Software Engineer",
    period:    "Apr 2023 – May 2024",
    location:  "India",
    bullets: [
      "Built Python microservices and REST APIs for an AI-driven infrastructure monitoring platform managing 500+ production services, improving modularity and reducing debugging overhead across distributed systems.",
      "Designed and deployed containerized applications using Docker and Kubernetes, managing 1,000+ pods with auto-scaling, load balancing, and high availability across distributed clusters.",
      "Architected Kafka-based real-time streaming pipelines processing 50,000+ events/min for log and metrics ingestion, enabling near real-time observability and faster incident detection.",
      "Developed AI/ML anomaly detection models integrated directly into monitoring workflows, enabling proactive identification of system failures and performance degradation before user impact.",
      "Automated end-to-end remediation workflows and led design and code reviews, cutting manual incident resolution effort by 30–40% and significantly improving mean time to recovery.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Section heading ───────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Where I&apos;ve worked
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-main">
            Experience
          </h2>
        </motion.div>

        {/* ── Timeline ──────────────────────────────────────────────────── */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary/40" />

          {/* Entries */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {/* Timeline dot */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-md"
                />

                {/* Card */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="bg-surface rounded-2xl p-7 border border-secondary/30 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  {/* Company header */}
                  <div className="flex items-start gap-4 mb-6">

                    {/* Badge */}
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="font-heading font-bold text-white text-sm">
                        {exp.badge}
                      </span>
                    </div>

                    {/* Title block */}
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-text-main leading-tight">
                        {exp.company}
                      </h3>
                      <p className="font-sans text-primary font-semibold text-sm mt-0.5">
                        {exp.role}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-text-main/50 text-xs font-sans">
                          <FaCalendarAlt className="text-secondary" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-text-main/50 text-xs font-sans">
                          <FaMapMarkerAlt className="text-secondary" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        variants={fadeUp}
                        transition={{ duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <p className="font-sans text-text-main/75 text-sm leading-relaxed">
                          {bullet}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
