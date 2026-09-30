import { motion } from "framer-motion";
import ReelCard from "./ReelCard";
import { worksGroups } from "../data";

const CARD = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

function WorksGrid() {
  return (
    <section id="works" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader />

        <div className="flex flex-col gap-20">
          {worksGroups.map((group) => {
            return (
              <div key={group.client}>
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-6"
                >
                  <h3 className="text-2xl font-semibold text-ink">
                    {group.client}
                  </h3>
                  <p className="mt-1 text-sm tracking-wide text-muted">
                    {group.range}
                  </p>
                  <div className="mt-3 h-px w-full max-w-[10rem] bg-gray-700" />
                </motion.div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
                  {group.clips.map((clip, i) => (
                    <ReelCard
                      key={clip.id}
                      aspect={clip.aspect}
                      video={clip.video}
                      motionProps={{
                        initial: "hidden",
                        whileInView: "show",
                        viewport: { once: true, amount: 0.3 },
                        variants: CARD,
                        custom: i,
                      }}
                      className={`flex flex-col ${i % 2 === 1 ? "md:translate-y-8" : ""}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
      <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
        Works
      </h2>
    </motion.div>
  );
}

export default WorksGrid;