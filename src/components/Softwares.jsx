import { softwares } from "../data";
import { BrandIcon, ICONS } from "./brandIcons";
import { motion } from "framer-motion";

function alpha(hex, opacity) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${opacity})`;
}

function Softwares() {
  return (
    <section id="softwares" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-4xl font-bold tracking-tight text-ink md:text-5xl"
        >
          Softwares
        </motion.h2>

        <div className="grid grid-cols-2 justify-items-center gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 md:grid-cols-4">
          {softwares.map((sw, i) => (
            <motion.div
              key={sw.id}
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28">
                <span
                  aria-hidden="true"
                  className="absolute inset-4 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ backgroundColor: sw.color }}
                />

                <svg
                  viewBox="0 0 120 120"
                  className="absolute inset-0 h-full w-full -rotate-90"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke={sw.color}
                    strokeOpacity="0.16"
                    strokeWidth="2"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke={sw.color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`${(sw.progress ?? 0.7) * 2 * Math.PI * 54} ${2 * Math.PI * 54}`}
                    className="opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </svg>

                <span
                  className="absolute inset-[8%] flex items-center justify-center rounded-full border transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: alpha(sw.color, 0.14),
                    borderColor: alpha(sw.color, 0.3),
                    boxShadow: `inset 0 1px 0 0 ${alpha(sw.color, 0.45)}`,
                  }}
                >
                  <BrandIcon
                    id={sw.id}
                    color={sw.color}
                    className={`h-[46%] w-[46%] ${
                      ICONS[sw.id]?.stroke
                        ? ""
                        : "drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
                    }`}
                  />
                </span>
              </div>
              <span className="max-w-[8rem] text-center text-xs font-medium tracking-wide text-muted transition-colors duration-300 group-hover:text-ink">
                {sw.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Softwares;