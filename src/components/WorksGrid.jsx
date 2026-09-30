import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import ReelCard from "./ReelCard";
import ProjectModal from "./ProjectModal";
import { worksGroups } from "../data";

const DESKTOP_COLUMNS = 3;

const COLUMN_CLASS = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
};

const REVEAL = {
  hidden: { opacity: 0, y: 44 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
};

const VIEWPORT = { once: true, amount: 0.15, margin: "0px 0px -80px 0px" };

function useOpenProject() {
  const [project, setProject] = useState(null);
  const open = useCallback((group, clip) => setProject({ group, clip }), []);
  const close = useCallback(() => setProject(null), []);
  return { project, open, close };
}

function spread(items, columns) {
  const cols = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => cols[i % columns].push(item));
  return cols;
}

function getLayout(clips) {
  const featured = clips[0]?.aspect === "landscape" && clips[1]?.aspect === "portrait";
  return featured
    ? { featured: clips.slice(0, 2), masonry: clips.slice(2), columns: DESKTOP_COLUMNS }
    : { featured: [], masonry: clips, columns: Math.min(DESKTOP_COLUMNS, clips.length) };
}

function WorksGrid() {
  const { project, open, close } = useOpenProject();

  return (
    <section id="works" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader />

        <div className="flex flex-col gap-24 md:gap-32">
          {worksGroups.map((group) => (
            <Group key={group.client} group={group} onOpen={(clip) => open(group, clip)} />
          ))}
        </div>
      </div>

      <ProjectModal project={project} onClose={close} />
    </section>
  );
}

function Group({ group, onOpen }) {
  const { featured, masonry, columns } = getLayout(group.clips);

  return (
    <div>
      <GroupHeader group={group} />

      {featured.length > 0 && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[auto_auto] lg:gap-8">
          {featured.map((clip, i) => (
            <ReelCard
              key={clip.id}
              aspect={clip.aspect}
              video={clip.video}
              title={clip.title}
              category={clip.category}
              onClick={() => onOpen(clip)}
              eager
              className={
                i === 0
                  ? "works-feature"
                  : "works-feature-tall mx-auto w-full max-w-[15rem] lg:max-w-none"
              }
              motionProps={{
                initial: "hidden",
                whileInView: "show",
                viewport: VIEWPORT,
                variants: REVEAL,
                custom: i,
              }}
            />
          ))}
        </div>
      )}

      {masonry.length > 0 && (
        <div className={`mt-6 grid grid-cols-2 gap-6 lg:gap-8 ${COLUMN_CLASS[columns]}`}>
          {spread(masonry, columns).map((column, c) => (
            <div key={c} className="flex flex-col gap-6 lg:gap-8">
              {column.map((clip, i) => (
                <ReelCard
                  key={clip.id}
                  aspect={clip.aspect}
                  video={clip.video}
                  title={clip.title}
                  category={clip.category}
                  onClick={() => onOpen(clip)}
                  motionProps={{
                    initial: "hidden",
                    whileInView: "show",
                    viewport: VIEWPORT,
                    variants: REVEAL,
                    custom: c * 0.08 + i * 0.05,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GroupHeader({ group }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-8 md:mb-10"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-2xl font-semibold text-ink md:text-3xl">{group.client}</h3>
        <span className="text-sm tracking-wide text-muted">{group.range}</span>
      </div>
      <div className="mt-3 h-px w-full max-w-[10rem] bg-gray-700" />
    </motion.div>
  );
}

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-20 md:mb-24"
    >
      <h2 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">Works</h2>
      <p className="mt-3 text-sm tracking-wide text-muted">
        Selected Work &middot; 2023 &mdash; Present
      </p>
    </motion.div>
  );
}

export default WorksGrid;
