import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-background">

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <section id="contact"    className="min-h-screen bg-surface flex items-center justify-center">
        <h2 className="font-heading text-3xl text-text-main">Contact</h2>
      </section>

    </main>
  );
}
