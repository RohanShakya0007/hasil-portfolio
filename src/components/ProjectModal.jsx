import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { videoUrls } from "../videos";

const ASPECT_LABEL = {
  landscape: "16:9 — Landscape",
  portrait: "9:16 — Portrait",
};

function ProjectModal({ project, onClose }) {
  const open = Boolean(project);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md md:p-8"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.clip.title}
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0f0f0f] p-4 shadow-[0_50px_120px_-40px_rgba(0,0,0,1)] md:p-6"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="inline-block rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
                  {project.clip.category}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {project.clip.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-lg text-ink transition-colors hover:bg-white/15"
              >
                &times;
              </button>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl bg-black">
              <video
                key={project.clip.id}
                src={videoUrls[project.clip.video]}
                className={`w-full ${
                  project.clip.aspect === "portrait"
                    ? "max-h-[58vh] object-contain"
                    : "aspect-[16/9] object-cover"
                }`}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              />
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 text-sm md:grid-cols-4">
              <Detail label="Client" value={project.group.client} />
              <Detail label="Role" value={project.group.role} />
              <Detail label="Period" value={project.group.range} />
              <Detail
                label="Format"
                value={ASPECT_LABEL[project.clip.aspect] ?? project.clip.aspect}
              />
            </dl>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.18em] text-muted">{label}</dt>
      <dd className="mt-1.5 text-ink">{value}</dd>
    </div>
  );
}

export default ProjectModal;
