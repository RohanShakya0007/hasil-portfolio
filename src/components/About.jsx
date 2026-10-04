import { motion } from "framer-motion";
import ContactBar from "./ContactBar";
import { contact } from "../data";
import { portraitImage } from "../images";

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-4xl font-bold tracking-tight text-ink md:mb-16 md:text-5xl"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 items-start gap-10 sm:max-w-md md:max-w-none md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] w-full rounded-lg border border-white/15">
              {portraitImage && (
                <img
                  src={portraitImage}
                  alt="Hasil Raj Shakya"
                  className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-md object-cover"
                  loading="lazy"
                />
              )}

              <CornerBracket pos="top-left" />
              <CornerBracket pos="top-right" />
              <CornerBracket pos="bottom-left" />
              <CornerBracket pos="bottom-right" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-lg font-medium text-ink sm:text-xl">Profile</h3>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[15.5px] md:text-[16px]">
              I&apos;m a creative Video Editor and Colorist focused on turning raw footage into polished, engaging visual stories. I bring together editing, color, and storytelling to create content that connects with audiences and leaves an impact.
            </p>

            <div className="mt-8 max-w-xl border-t border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 py-3.5">
                <span className="text-sm text-muted">Name</span>
                <span className="text-sm font-medium text-ink">
                  Hasil Raj Shakya
                </span>
              </div>
              <div className="flex items-center justify-between py-3.5">
                <span className="text-sm text-muted">Age</span>
                <span className="text-sm font-medium text-ink">26 Yrs</span>
              </div>
            </div>

            <a
              href={contact.cv}
              download="Hasil-Raj-Shakya-CV.pdf"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-200 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" />
              </svg>
              Curriculum Vitae
            </a>
          </motion.div>
        </div>

        <footer id="contact" className="mt-20 border-t border-white/10 pt-8 md:mt-24 md:pt-10">
          <ContactBar />
          <p className="mt-8 text-xs text-gray-600">
            © {new Date().getFullYear()} edits.byhasil — Hasil Raj Shakya.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Made by{" "}
            <a
              href="https://shakya-rohan.com.np"
              target="_blank"
              rel="noreferrer"
              className="text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Rohan Shakya
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}

function CornerBracket({ pos }) {
  const map = {
    "top-left": "top-2 left-2 border-t-2 border-l-2",
    "top-right": "top-2 right-2 border-t-2 border-r-2",
    "bottom-left": "bottom-2 left-2 border-b-2 border-l-2",
    "bottom-right": "bottom-2 right-2 border-b-2 border-r-2",
  };
  return <span aria-hidden="true" className={`pointer-events-none absolute h-6 w-6 border-white/60 ${map[pos]}`} />;
}

export default About;