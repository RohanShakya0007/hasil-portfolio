import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { videoUrls } from "../videos";

const ASPECT_CLASS = {
  landscape: "aspect-[16/9]",
  // Portrait clips soften to 4:5 on phones so they do not dominate the viewport
  portrait: "aspect-[4/5] sm:aspect-[9/16]",
};

function ReelCard({
  aspect = "portrait",
  video,
  title,
  category,
  onClick,
  className = "",
  eager = false,
  motionProps = {},
}) {
  const videoRef = useRef(null);
  const interactive = typeof onClick === "function";

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "250px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Shell = interactive ? "button" : "div";
  const shellProps = interactive
    ? { type: "button", onClick, "aria-label": `${title ?? "Project"} — open details` }
    : {};

  return (
    <motion.div
      {...motionProps}
      className={`group relative hover:z-10 ${className}`}
    >
      <Shell
        {...shellProps}
        className={`relative block w-full overflow-hidden rounded-2xl bg-white/[0.04] text-left shadow-[0_30px_70px_-42px_rgba(0,0,0,1)] ring-1 ring-white/[0.07] transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_40px_90px_-40px_rgba(0,0,0,1)] hover:ring-white/20 focus-visible:ring-2 focus-visible:ring-white/70 md:rounded-3xl ${
          interactive ? "cursor-pointer" : ""
        } ${ASPECT_CLASS[aspect] ?? ASPECT_CLASS.portrait}`}
      >
        {video && (
          <video
            ref={videoRef}
            src={videoUrls[video]}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
            muted
            loop
            playsInline
            preload={eager ? "metadata" : "none"}
          />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-60 transition-opacity duration-500 group-hover:opacity-95"
        />

        {category && (
          <span className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
            {category}
          </span>
        )}

        {title && (
          <div className="touch-reveal pointer-events-none absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 opacity-0 backdrop-blur-xl transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:inset-x-4 md:bottom-4">
            <span className="truncate text-sm font-semibold text-white md:text-base">
              {title}
            </span>
            <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-white/60">
              View
            </span>
          </div>
        )}
      </Shell>
    </motion.div>
  );
}

export default ReelCard;
