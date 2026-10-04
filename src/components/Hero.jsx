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
    <section id="home" className="relative overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.h1
          variants={CONTAINER}
          initial="hidden"
          animate="show"
          className="max-w-6xl text-[clamp(1.5rem,1.05rem+2vw,1.875rem)] font-semibold leading-[1.15] tracking-tight text-ink"
        >
          <motion.span variants={ITEM} className="block">
            Video editor &amp; colorist turning raw footage into powerful visual stories
          </motion.span>
          <motion.span variants={ITEM} className="mt-1.5 block text-balance lg:mt-2">
            through clean editing, thoughtful color, and creative storytelling.
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 sm:mt-12"
        >
          <ContactBar />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ReelCard
              aspect="landscape"
              video="v1.mp4"
             
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
              Narsimha Avatar Kartik Nach
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
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;