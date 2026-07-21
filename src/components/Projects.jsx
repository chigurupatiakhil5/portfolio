"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaAward } from "react-icons/fa";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
};

const projects = [
  {
    title:       "Review Reality - Fake Review Detection System",
    description:
      "A machine learning system that detects fake product reviews across 10 major e-commerce platforms with 92% precision. Uses ensemble ML algorithms and NLP-based feature engineering on 500,000+ review entries. Published in Springer, Cham.",
    highlights: [
      "92% precision across 10 major review platforms",
      "Reduced false positives by 30% through targeted feature extraction",
      "Increased fraudulent review identification by 15%",
      "Published in Springer, Cham - Feb 14, 2025",
    ],
    stack: ["Python", "Scikit-learn", "TensorFlow", "NLP", "Random Forest", "Naive Bayes", "MLP"],
    github: null,
    live:   "https://link.springer.com/chapter/10.1007/978-3-031-74885-1_20",
    badge: "Published - Springer",
  },
  {
    title:       "URL Shortener - Distributed Analytics Platform",
    description:
      "A full-stack URL shortener with a real-time analytics pipeline. Click tracking is fully decoupled from the redirect path via an async Kafka consumer worker - so redirects are never slowed by database writes. Includes a live Grafana dashboard and automated CI pipeline.",
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
    title:       "AI Incident Intelligence Platform",
    description:
      "An AI-powered incident intelligence platform that ingests infrastructure metrics in real time, flags anomalies, and lets engineers query past incidents in plain English. A RAG pipeline over indexed incident history returns streamed, grounded answers instead of forcing manual log digging.",
    highlights: [
      "Real-time metric ingestion via AWS SQS with rule-based anomaly detection",
      "RAG pipeline over LlamaIndex + Supabase pgvector for semantic incident search",
      "Streaming responses over SSE, evaluated with RAGAS and tracked in MLflow",
      "Claude API as primary LLM with Groq fallback for reliability",
    ],
    stack: ["Python", "FastAPI", "Claude API", "LlamaIndex", "Supabase pgvector", "RAGAS", "MLflow", "AWS SQS", "React", "TypeScript"],
    github: null,
    live:   null,
    badge:  null,
  },
  {
    title:       "AI-Powered Log Analyzer",
    description:
      "A log analysis tool that lets engineers upload raw log files and ask plain-English questions about them. Logs are chunked and embedded for semantic search, while a rule-based detector auto-flags ERROR/WARN/CRITICAL frequency spikes without any LLM calls.",
    highlights: [
      "Semantic search over log chunks using sentence-transformers and Supabase pgvector",
      "Streamed natural-language answers via Groq API running LLaMA 3, fully free-tier",
      "Automatic ERROR/WARN/CRITICAL spike detection with zero LLM cost",
      "Dockerized end-to-end with GitHub Actions CI/CD",
    ],
    stack: ["React", "Vite", "FastAPI", "Groq", "LLaMA 3", "Sentence-Transformers", "Supabase pgvector", "Docker"],
    github: null,
    live:   null,
    badge:  null,
  },
  {
    title:       "Autonomous MCP Agent - Multi-Tool Task Orchestration",
    description:
      "A custom Model Context Protocol (MCP) server exposing database, ticketing, and external API tools to Claude Desktop and a self-built autonomous agent client. The agent chains tool calls to complete multi-step tasks and recovers from failures instead of halting.",
    highlights: [
      "Custom MCP server built on the Anthropic MCP SDK exposing database, ticketing, and API tools",
      "Autonomous agent client powered by Groq API (LLaMA 3) chains tool calls to complete multi-step tasks",
      "Error recovery and retry loop - failed tool calls trigger re-planning instead of halting execution",
      "Every agent decision and tool call logged and persisted in PostgreSQL for full traceability",
    ],
    stack: ["Python", "Anthropic MCP SDK", "Groq", "LLaMA 3", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
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
        {/* When the count is odd, the last card spans + centers itself instead of sitting alone half-empty */}
        <div className="grid md:grid-cols-2 gap-8 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-lg [&>*:last-child:nth-child(odd)]:md:mx-auto [&>*:last-child:nth-child(odd)]:md:w-full">
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
