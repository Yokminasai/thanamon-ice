"use client";
import { SITE } from "@/lib/constants";

export function MobileCTABar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-gold/20 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
      <a
        href={`tel:${SITE.phoneRaw}`}
        className="flex items-center justify-center gap-2.5 py-4 bg-navy text-white text-sm font-bold active:bg-navy-light transition-colors"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
        </svg>
        โทร {SITE.phone}
      </a>
      <a
        href={SITE.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 py-4 bg-gold text-navy text-sm font-bold active:bg-gold-dark transition-colors"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.89c.50 0 .866.34.866.748 0 .409-.366.748-.866.748h-2.154v1.35h2.154c.5 0 .866.34.866.748 0 .409-.366.748-.866.748H16.46a.755.755 0 01-.753-.748V9.14c0-.408.337-.748.753-.748h2.905zm-5.634 3.594a.748.748 0 01-.748.748.751.751 0 01-.6-.301l-2.452-3.342v2.895a.748.748 0 01-1.497 0V9.14a.748.748 0 01.748-.748.75.75 0 01.601.3l2.452 3.343V9.14a.748.748 0 011.496 0v4.344zm-6.083.748a.748.748 0 01-1.496 0V9.14a.748.748 0 011.496 0v4.092zm-2.636.748H2.107a.755.755 0 01-.753-.748V9.14c0-.408.337-.748.753-.748.415 0 .752.34.752.748v3.344h1.793c.415 0 .752.34.752.748 0 .409-.337.748-.752.748zM12 2C6.477 2 2 6.036 2 11c0 2.67 1.213 5.07 3.124 6.756l-.752 2.808 2.887-1.52C8.44 19.649 10.17 20 12 20c5.523 0 10-4.036 10-9s-4.477-9-10-9z" />
        </svg>
        LINE {SITE.line}
      </a>
    </div>
  );
}
