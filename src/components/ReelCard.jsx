import { motion } from "framer-motion";
import { videoUrls } from "../videos";

function ReelCard({ aspect = "portrait", video, className = "", motionProps = {} }) {
  const isPortrait = aspect === "portrait";

  return (
    <motion.div {...motionProps} className={`group relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-white transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.25)] ${
          isPortrait ? "aspect-[9/16]" : "aspect-[16/9]"
        }`}
      >
        {video && (
          <video
            src={videoUrls[video]}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
    </motion.div>
  );
}

export default ReelCard;