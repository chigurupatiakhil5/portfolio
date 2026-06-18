"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaAward } from "react-icons/fa";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
};

const projects = [
  {
    title:       "Review Reality — Fake Review Detection System",
    description:
      "A machine learning system that detects fake product reviews across 10 major e-commerce platforms with 92% precision. Uses ensemble ML algorithms and NLP-based feature engineering on 500,000+ review entries. Published in Springer, Cham.",
    highlights: [
      "92% precision across 10 major review platforms",
      "Reduced false positives by 30% through targeted feature extraction",
      "Increased fraudulent review identification by 15%",
      "Published in Springer, Cham — Feb 14, 2025",
    ],
    stack: ["Python", "Scikit-learn", "TensorFlow", "NLP", "Random Forest", "Naive Bayes", "MLP"],
    github: null,
    live:   "https://link.springer.com/chapter/10.1007/978-3-031-74885-1_20",
    badge: "Published — Springer",
  },
  {
    title:       "URL Shortener — Distributed Analytics Platform",
    description:
      "A full-stack URL shortener with a real-time analytics pipeline. Click tracking is fully decoupled from the redirect path via an async Kafka consumer worker — so redirects are never slowed by database writes. Includes a live Grafana dashboard and automated CI pipeline.",
    highlights: [
      "Cache-aside pattern with Redis for sub-millisecond slug lookups",
      "Kafka producer/consumer decouples click tracking from redirects",
      "Prometheus metrics visualized on a live Grafana dashboard",
      "GitHub Actions CI pipeline running pytest and ESLint on every push",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "React", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/chigurupatiakhil5/url-shortener",
    live:   null,
    badge:  null,
  },
  {
    title:       "Hydroponics Using IoT — Home Gardening System",
    description:
      "An IoT-driven hydroponic system that enables soil-free home gardening. Optimized water and nutrient delivery increased crop yield efficiency by 35%, while real-time sensor alerts reduced manual monitoring time by 50%.",
    highlights: [
      "Increased crop yield efficiency by 35% through optimized nutrient delivery",
      "Integrated ultrasonic water level sensors with real-time alerts",
      "Reduced manual monitoring time by 50%",
      "Scalable prototype supporting up to 20 plants per unit",
    ],
    stack: ["IoT", "Arduino", "Raspberry Pi", "Python", "Ultrasonic Sensors", "Embedded Systems"],
    github: null,
    live:   null,
    badge:  null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

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
            What I&apos;ve built
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-main">
            Projects
          </h2>
        </motion.div>

        {/* ── Project cards ─────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-background rounded-2xl p-7 border border-secondary/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-300 flex flex-col"
            >
              {/* Published badge */}
              {project.badge && (
                <div className="flex items-center gap-2 bg-primary/10 text-primary text-xs font-sans font-semibold px-3 py-1.5 rounded-full w-fit mb-4">
                  <FaAward className="text-primary" />
                  {project.badge}
                </div>
              )}

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-text-main mb-3 leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-text-main/70 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2 mb-6">
                {project.highlights.map((point, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    <span className="font-sans text-text-main/65 text-xs leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary/20 text-primary text-xs font-sans font-medium px-3 py-1 rounded-full border border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-primary text-white font-sans text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-colors duration-200"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border-2 border-primary text-primary font-sans text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-primary/5 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt />
                    View Publication
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
