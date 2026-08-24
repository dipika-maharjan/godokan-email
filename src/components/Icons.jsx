function Icon({ name, className = "" }) {
  const iconPaths = {
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" />
      </>
    ),
    phone: (
      <path d="M5 4h3l1.5 4-2 1.7a15 15 0 0 0 6.8 6.8l1.7-2 4 1.5v3c0 1.1-.9 2-2 2C10.3 21 3 13.7 3 5.9 3 4.9 3.9 4 5 4Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    facebook: (
      <path d="M13.5 19v-6h2l.3-2.3h-2.3V9.2c0-.7.2-1.2 1.2-1.2H16V6a12 12 0 0 0-1.8-.1c-1.8 0-3 1.1-3 3.1v1.7H9V13h2.2v6h2.3Z" />
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.8" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.2-.4.5-.4.8-.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.7 1.2 1.5 1.9 2.7 2.5l.5-.6c.2-.2.4-.2.6-.1l1.7.8c.3.1.3.4.2.7-.3.8-1 1.2-1.7 1.1-3.8-.7-6-2.9-6.7-6.1-.1-.3.1-.6.3-.8l.5-.5Z" />
      </>
    ),
  };

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

export default Icon;
