"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaPython,
  FaDocker,
  FaBrain,
  FaCloud,
  FaCubes,
  FaStream,
} from "react-icons/fa";

// Reusable animation variant — fades up when it enters the viewport
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
};

const specializations = [
  { icon: FaPython,   label: "Python Microservices" },
  { icon: FaStream,   label: "Kafka Streaming"      },
  { icon: FaDocker,   label: "Docker & Kubernetes"  },
  { icon: FaCloud,    label: "Cloud Architecture"   },
  { icon: FaBrain,    label: "AI / ML"              },
  { icon: FaCubes,    label: "Distributed Systems"  },
];

const quickFacts = [
  { icon: FaMapMarkerAlt,   text: "Austin, TX"                                },
  { icon: FaBriefcase,      text: "Software Engineer · ex-TCS"                },
  { icon: FaGraduationCap,  text: "M.S. Information Systems · Regis University" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
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
            Get to know me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-main">
            About Me
          </h2>
        </motion.div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left: Bio + Quick facts ───────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Bio */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-sans text-text-main/80 text-lg leading-relaxed mb-6"
            >
              I&apos;m a software engineer based in Austin, TX, focused on building
              backend systems that are reliable, observable, and fast. At Tata
              Consultancy Services, I designed Python microservices and Kafka
              streaming pipelines for an AI-driven infrastructure monitoring
              platform managing 500+ production services.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="font-sans text-text-main/80 text-lg leading-relaxed mb-10"
            >
              I hold a Master&apos;s in Information Systems from Regis University and
              stay curious about the intersection of distributed systems and AI/ML
              - particularly how intelligent systems can be built to scale.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              {quickFacts.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary text-lg" />
                  </div>
                  <span className="font-sans text-text-main/80 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Specializations grid ───────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {specializations.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-2xl p-5 border border-secondary/30 hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon className="text-primary text-xl" />
                </div>
                <p className="font-sans text-sm font-medium text-text-main leading-snug">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
