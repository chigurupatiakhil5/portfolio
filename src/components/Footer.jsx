const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-secondary/30 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Name */}
        <a
          href="#"
          className="font-heading font-bold text-xl text-primary hover:opacity-80 transition-opacity"
        >
          Akhil Chigurupati
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-text-main/60 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-sans text-xs text-text-main/40">
          © {year} Akhil Chigurupati. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
