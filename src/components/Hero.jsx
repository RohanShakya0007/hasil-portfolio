import { motion } from "framer-motion";
import ContactBar from "./ContactBar";
import ReelCard from "./ReelCard";

const CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const ITEM = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <FilmstripDecor />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h1
          variants={CONTAINER}
          initial="hidden"
          animate="show"
          className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-ink md:text-6xl"
        >
          <motion.span variants={ITEM} className="block">
          &apos;Video editor
          </motion.span>
          <motion.span variants={ITEM} className="block">
            &amp; colorist turning raw footage
          </motion.span>
          <motion.span variants={ITEM} className="block">
            into stories that feel just right.
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 border-t border-white/10 pt-8"
        >
          <ContactBar />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ReelCard
              aspect="landscape"
              video="v1.mp4"
              title="Every Frame Has A Story"
              category="Showreel"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <h2 className="font-script text-4xl leading-snug text-ink md:text-5xl">
              Every frame has its own story.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FilmstripDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 right-[-4rem] hidden select-none md:block"
    >
      <div className="flex gap-3 opacity-[0.06]">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
          <div
            key={n}
            style={{ transform: `rotate(${n % 2 === 0 ? 18 : -18}deg) translateY(${n % 2 === 0 ? 0 : 40}px)` }}
            className="h-72 w-10 rounded-[3px] border border-white/60"
          >
            <div className="m-1 h-1.5 w-1.5 rounded-full bg-white/80" />
            <div className="mx-1.5 h-16 border-x border-white/50" />
            <div className="m-1 h-1.5 w-1.5 rounded-full bg-white/80" />
            <div className="m-1 h-1.5 w-1.5 rounded-full bg-white/80" />
            <div className="mx-1.5 h-16 border-x border-white/50" />
            <div className="m-1 h-1.5 w-1.5 rounded-full bg-white/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;