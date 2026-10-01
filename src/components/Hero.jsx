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
    <section id="home" className="relative overflow-hidden pt-24 md:pt-36">
      <CameraDecor />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h1
          variants={CONTAINER}
          initial="hidden"
          animate="show"
          className="max-w-4xl text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl md:ml-16 md:text-6xl lg:ml-32"
        >
          <motion.span variants={ITEM} className="block">
          Video editor
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
          className="mt-8 border-t border-white/10 pt-8 sm:mt-10"
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
            <h2 className="text-xl font-bold tracking-tight transition-colors text-paper sm:text-[22px]">
              Every frame has its own story. I turn moments into visuals that feel just right.
            </h2>
            <h3 className="mt-5 text-base leading-relaxed text-ink/80 sm:mt-6 sm:text-lg">
            A warm cinematic grade designed to enhance the natural tones of the scene while creating a calm, moody visual feel.
            </h3>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 border-t border-white/10 pt-12 sm:mt-16 sm:gap-12 sm:pt-16 md:mt-24 md:pt-24 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
              Kartik Naach &middot; Patan Durbar Square
            </span>
            <h2 className="text-xl font-bold tracking-tight transition-colors text-paper sm:text-[22px]">
              Arsimha Avatar Kartik Nach
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/80 sm:mt-6 sm:text-lg">
              The Kartik Naach featuring Narasimha is performed annually at Patan
              Durbar Square, showcasing Lalitpur&rsquo;s rich cultural heritage and
              ancient traditions. The traditional dance follows a ten-day format and
              was initiated nearly four centuries ago by King Siddhi Narsingh Malla.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <ReelCard
              aspect="landscape"
              video="v2.mp4"
              title="Arsimha Avatar Kartik Nach"
              category="Culture Film"
              eager
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CameraDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-20 top-16 hidden w-[380px] select-none md:block md:w-[460px] lg:left-0 lg:w-[520px]"
    >
      <svg
        viewBox="0 0 240 160"
        fill="none"
        className="cine-animate-float w-full opacity-[0.26] drop-shadow-[0_0_80px_rgba(255,255,255,0.2)]"
      >
        <g stroke="#ffffff" strokeOpacity="0.8" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
          <path d="M44 62h92a10 10 0 0 1 10 10v44a10 10 0 0 1-10 10H44a10 10 0 0 1-10-10V72a10 10 0 0 1 10-10Z" />
          <path d="M146 76h32l24-18v72l-24-18h-32" strokeOpacity="0.55" />
          <path d="M34 62V46a8 8 0 0 1 8-8h30l12 24" strokeOpacity="0.7" />
          <path d="M78 38h40a10 10 0 0 1 10 10v14" strokeOpacity="0.7" />
          <circle cx="88" cy="94" r="25" />
          <circle cx="88" cy="94" r="17" strokeOpacity="0.4" />
          <circle cx="88" cy="94" r="6" strokeOpacity="0.55" />
          <circle cx="53" cy="47" r="21" />
          <circle cx="53" cy="47" r="8" strokeOpacity="0.4" />
          <circle cx="103" cy="47" r="21" />
          <circle cx="103" cy="47" r="8" strokeOpacity="0.4" />
          <path d="M184 80h32v28h-32" strokeOpacity="0.35" />
        </g>
      </svg>
    </div>
  );
}

export default Hero;