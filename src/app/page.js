export default function Home() {
  return (
    <main className="bg-background">

      {/* Tall hero placeholder — scroll down to test navbar blur */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-5xl font-bold text-text-main mb-4">
            Akhil Chigurupati
          </h1>
          <p className="font-sans text-xl text-text-main/70">
            Scroll down to test the navbar
          </p>
        </div>
      </section>

      {/* Placeholder sections — just enough to scroll through */}
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
