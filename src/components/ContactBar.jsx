import { motion } from "framer-motion";
import { contact } from "../data";

const PHONE =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z";
const PIN =
  "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z";
const MAIL = "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6";
const LINKEDIN =
  "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45Z";

const ITEMS = [
  { icon: PHONE, label: contact.phone, href: contact.phoneHref },
  { icon: PIN, label: contact.location },
  { icon: MAIL, label: contact.email, href: contact.emailHref },
  { icon: LINKEDIN, label: contact.linkedin, href: contact.linkedinHref, external: true },
];

/* Thin divider lines: stacked rows on mobile, 2x2 on tablet, single row on desktop */
const DIVIDERS = [
  "",
  "border-t border-white/[0.07] sm:border-l sm:border-t-0",
  "border-t border-white/[0.07] sm:border-l lg:border-t-0",
  "border-t border-white/[0.07] sm:border-l lg:border-t-0",
];

function ContactBar() {
  return (
    <motion.nav
      aria-label="Contact details"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="grid w-full grid-cols-1 border-y border-white/[0.07] bg-[#050505] sm:grid-cols-2 lg:grid-cols-4"
    >
      {ITEMS.map((item, index) => {
        const inner = (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-white/55 transition-colors duration-300 group-hover:text-white"
            >
              {item.icon === LINKEDIN ? (
                <path d={item.icon} fill="currentColor" stroke="none" />
              ) : (
                <path d={item.icon} />
              )}
            </svg>
            <span className="min-w-0 truncate font-display text-[11px] font-medium uppercase tracking-[0.14em] text-[#A1A1AA] transition-colors duration-300 group-hover:text-white sm:text-xs">
              {item.label}
            </span>
          </>
        );

        const shell = `group flex min-w-0 items-center justify-center gap-3 px-6 py-5 text-center transition-colors duration-300 hover:bg-white/[0.03] ${DIVIDERS[index]}`;

        return item.href ? (
          <a
            key={item.label}
            href={item.href}
            className={shell}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
          >
            {inner}
          </a>
        ) : (
          <div key={item.label} className={shell}>
            {inner}
          </div>
        );
      })}
    </motion.nav>
  );
}

export default ContactBar;