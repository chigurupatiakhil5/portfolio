"use client";

import { motion } from "framer-motion";

// Each element fades up from below — reused for every animated child
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Animated background blobs ─────────────────────────────────────── */}
      {/*                                                                      */}
      {/* These are large blurry circles positioned behind the content.       */}
      {/* CSS keyframe animation slowly drifts them around for a living feel. */}
      {/* blur-3xl makes them soft — they look like light, not shapes.        */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob animation-delay-2s absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/25 blur-3xl" />
        <div className="animate-blob absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-blob animation-delay-4s absolute -bottom-32 right-1/3 w-[350px] h-[350px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      {/*                                                                      */}
      {/* staggerChildren: each child animates 0.15s after the previous one. */}
      {/* This creates the cascade effect — greeting, name, title, bio, CTA. */}

      <motion.div
        className="text-center px-6 max-w-4xl mx-auto pt-20"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-sans text-primary font-medium text-lg mb-3 tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-text-main mb-4 leading-tight"
        >
          Akhil Chigurupati
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-6"
        >
          Software Engineer
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-sans text-text-main/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Specializing in distributed systems, AI/ML,
          and cloud-native architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-primary text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-primary text-primary font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-primary/5 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-sans text-xs tracking-widest uppercase text-text-main/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-text-main/20 rounded-full"
        />
      </motion.div>

    </section>
  );
}
