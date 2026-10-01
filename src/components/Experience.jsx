import { motion } from "framer-motion";
import { experience } from "../data";

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-4xl font-bold tracking-tight text-ink md:text-5xl"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.company + entry.range}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="grid grid-cols-1 items-start gap-6 border-b border-white/10 pb-10 last:border-0 sm:gap-8 md:grid-cols-2 md:pb-12"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                  {entry.company}
                </h3>
                <span className="text-sm tracking-wide text-muted">
                  {entry.range}
                </span>
              </div>

              <div className="relative md:border-l md:border-gray-700 md:pl-10">
                <h4 className="mb-3 text-base font-medium text-ink sm:text-lg">
                  Role - {entry.role}
                </h4>
                <ul className="flex flex-col gap-2">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;