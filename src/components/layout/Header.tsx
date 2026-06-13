"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-navy transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.45)]" : ""
      }`}
    >
      {/* Top contact bar — hidden on mobile, visible md+ */}
      <div className="hidden md:block bg-navy-dark border-b border-white/10">
        <div className="container-content flex items-center justify-between py-2 text-sm text-warm-200">
          {/* Left: hours */}
          <span className="flex items-center gap-1.5 text-warm-300 text-xs">
            <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {SITE.hours}
          </span>
          {/* Right: phone + LINE */}
          <div className="flex items-center gap-5">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              {SITE.phone}
            </a>
            <span className="text-white/20">|</span>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.036 2 11c0 2.67 1.213 5.07 3.124 6.756l-.752 2.808 2.887-1.52C8.44 19.649 10.17 20 12 20c5.523 0 10-4.036 10-9s-4.477-9-10-9z" />
              </svg>
              {SITE.line}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-content flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/โลโก้โรงน้ำแข็ง.jpg"
            alt="โรงงานน้ำแข็งธนมน"
            width={44}
            height={44}
            className="rounded object-contain shrink-0"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-tight">โรงงานน้ำแข็งธนมน</span>
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Thanamon Ice · มหาชัย</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="relative block px-4 py-2 text-sm font-semibold text-warm-200 hover:text-gold transition-colors group">
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${SITE.phoneRaw}`}
          className="hidden lg:inline-flex items-center gap-2 bg-gold text-navy font-bold text-sm px-5 py-2.5 hover:bg-gold-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
          </svg>
          โทรเลย
        </a>

        {/* Mobile: phone link + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-1.5 text-gold text-sm font-bold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            <span className="hidden sm:inline">{SITE.phone}</span>
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 text-white" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 border-t border-white/10" : "max-h-0"}`}>
        <div className="bg-navy-light">
          <ul className="container-content py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-warm-200 border-b border-white/10 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 pb-2 flex items-center gap-3 text-sm text-warm-300">
              <svg className="w-3.5 h-3.5 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {SITE.hours}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
