import { contact } from "../data";

function Icon({ path, className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

const PHONE = "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z";
const PIN = "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z";
const MAIL = "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 2-10 7L2 6";

function ContactBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <a
        href={contact.phoneHref}
        className="flex min-w-0 items-center gap-2.5 py-1 text-sm text-muted transition-colors hover:text-ink"
      >
        <Icon path={PHONE} />
        <span>{contact.phone}</span>
      </a>

      <span className="hidden h-4 w-px bg-gray-700 sm:block" />
      <span className="text-xs text-gray-700 sm:hidden">-</span>

      <a
        href="#"
        className="flex min-w-0 items-center gap-2.5 py-1 text-sm text-muted transition-colors hover:text-ink"
      >
        <Icon path={PIN} />
        <span>{contact.location}</span>
      </a>

      <span className="hidden h-4 w-px bg-gray-700 sm:block" />
      <span className="text-xs text-gray-700 sm:hidden">-</span>

      <a
        href={contact.emailHref}
        className="flex min-w-0 items-center gap-2.5 py-1 text-sm text-muted transition-colors hover:text-ink"
      >
        <Icon path={MAIL} />
        <span>{contact.email}</span>
      </a>

      <span className="hidden h-4 w-px bg-gray-700 sm:block" />
      <span className="text-xs text-gray-700 sm:hidden">-</span>

      <a
        href={contact.linkedinHref}
        target="_blank"
        rel="noreferrer"
        className="flex min-w-0 items-center gap-2.5 py-1 text-sm text-muted transition-colors hover:text-ink"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-black">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45Z" />
          </svg>
        </span>
        <span className="min-w-0 max-w-[10rem] truncate sm:max-w-[16rem]">
          {contact.linkedin}
        </span>
      </a>
    </div>
  );
}

export default ContactBar;