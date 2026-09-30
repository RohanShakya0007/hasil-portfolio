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

        <div className="flex flex-col gap-16">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.company + entry.range}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="grid grid-cols-1 items-start gap-8 border-b border-white/10 pb-12 last:border-0 md:grid-cols-2"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-ink">
                  {entry.company}
                </h3>
                <span className="text-sm tracking-wide text-muted">
                  {entry.range}
                </span>
              </div>

              <div className="relative md:border-l md:border-gray-700 md:pl-10">
                <h4 className="mb-3 text-lg font-medium text-ink">
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