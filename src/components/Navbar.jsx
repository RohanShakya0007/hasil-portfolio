import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          className="font-script text-2xl leading-none text-ink transition-opacity hover:opacity-70 md:text-3xl"
        >
          edits.byhasil
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-base text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;