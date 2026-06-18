"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaBrain,
  FaCubes,
  FaStream,
  FaChartBar,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
};

const skillCategories = [
  {
    category: "Languages",
    icon: FaCode,
    skills: ["Python", "JavaScript", "Java", "C", "SQL", "HTML", "CSS"],
  },
  {
    category: "Backend",
    icon: FaServer,
    skills: ["FastAPI", "REST APIs", "Microservices"],
  },
  {
    category: "Frontend",
    icon: FaLayerGroup,
    skills: ["React.js", "Next.js", "Vite"],
  },
  {
    category: "AI / ML",
    icon: FaBrain,
    skills: ["Scikit-learn", "TensorFlow", "Anomaly Detection", "Predictive Analytics", "NLP"],
  },
  {
    category: "Containers & Orchestration",
    icon: FaCubes,
    skills: ["Docker", "Kubernetes", "Helm"],
  },
  {
    category: "Messaging",
    icon: FaStream,
    skills: ["Apache Kafka"],
  },
  {
    category: "Monitoring & Observability",
    icon: FaChartBar,
    skills: ["Prometheus", "Grafana", "ELK Stack"],
  },
  {
    category: "Databases",
    icon: FaDatabase,
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    icon: FaCloud,
    skills: ["AWS", "GitHub Actions", "GitLab CI/CD", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
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
            What I work with
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-main">
            Skills
          </h2>
        </motion.div>

        {/* ── Skill categories ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="bg-surface rounded-2xl p-6 border border-secondary/30"
            >
              {/* Category header */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cat.icon className="text-primary text-sm" />
                </div>
                <h3 className="font-heading text-base font-semibold text-text-main">
                  {cat.category}
                </h3>
              </motion.div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                    className="bg-background text-text-main font-sans text-sm font-medium px-4 py-1.5 rounded-full border border-secondary/40 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
