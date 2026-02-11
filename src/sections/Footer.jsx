export default function Footer() {
  const socialLinks = [
    {
      label: "Email",
      href: "mailto:ravvadharani2000@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M20.2 4H3.8C2.81 4 2 4.81 2 5.8v12.4C2 19.19 2.81 20 3.8 20h16.4c.99 0 1.8-.81 1.8-1.8V5.8C22 4.81 21.19 4 20.2 4zm0 3.6l-8.2 5.1-8.2-5.1V5.8l8.2 5.1 8.2-5.1v1.8z" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ravva-dharani-74876b2ba/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.43a2.03 2.03 0 1 1 0-4.06 2.03 2.03 0 0 1 0 4.06zM20.45 20.45h-3.5v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67h-3.5V9h3.36v1.56h.05c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.21 2.34 4.21 5.39v6.35z" />
        </svg>
      )
    },
    {
      label: "GitHub",
      href: "https://github.com/dharaniravva2000",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    }
  ];

  return (
    <footer className="border-t border-[#3a2c1f]/70 bg-[#0d0b09] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-[#3a2c1f]/70 bg-[#120d0a]/80 p-2 text-[#d5c6b5]/80 transition hover:text-[#f3e9da]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-6xl px-4 text-center text-[0.6rem] uppercase tracking-[0.3em] text-[#d5c6b5]/50 sm:px-6">
        © 2026 Dharani. All rights reserved.
      </div>
    </footer>
  );
}
