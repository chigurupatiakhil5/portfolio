import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-background">

      <Hero />

      {/* Placeholder sections — will be replaced version by version */}
      <section id="about"      className="min-h-screen bg-surface flex items-center justify-center">
        <h2 className="font-heading text-3xl text-text-main">About</h2>
      </section>
      <section id="experience" className="min-h-screen bg-background flex items-center justify-center">
        <h2 className="font-heading text-3xl text-text-main">Experience</h2>
      </section>
      <section id="projects"   className="min-h-screen bg-surface flex items-center justify-center">
        <h2 className="font-heading text-3xl text-text-main">Projects</h2>
      </section>
      <section id="skills"     className="min-h-screen bg-background flex items-center justify-center">
        <h2 className="font-heading text-3xl text-text-main">Skills</h2>
      </section>
      <section id="contact"    className="min-h-screen bg-surface flex items-center justify-center">
        <h2 className="font-heading text-3xl text-text-main">Contact</h2>
      </section>

    </main>
  );
}
