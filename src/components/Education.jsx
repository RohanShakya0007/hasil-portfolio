import { motion } from "framer-motion";
import { education } from "../data";

function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-4xl font-bold tracking-tight text-ink md:text-5xl"
        >
          Education
        </motion.h2>

        <div className="flex flex-col gap-10">
          {education.map((entry, i) => (
            <motion.div
              key={entry.degree + entry.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="grid grid-cols-1 items-start gap-6 border-b border-white/10 pb-8 last:border-0 sm:gap-8 md:grid-cols-2 md:pb-10"
            >
              <div>
                <span className="text-sm font-medium tracking-wide text-muted">
                  {entry.status}
                </span>
              </div>

              <div className="relative md:border-l md:border-gray-700 md:pl-10">
                <h3 className="text-lg font-semibold text-ink sm:text-xl">{entry.degree}</h3>
                <p className="mt-1 text-sm text-muted">{entry.institution}</p>

                {entry.subTopics && (
                  <ul className="mt-4 flex flex-col gap-2">
                    {entry.subTopics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;