import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-warm-200">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-xl leading-snug">โรงงานน้ำแข็งธนมน</p>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">Thanamon Ice · มหาชัย</p>
            <p className="text-sm text-warm-300 leading-relaxed">
              ผู้ผลิตและจัดจำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน และน้ำแข็งยูนิต
              สำหรับธุรกิจในพื้นที่มหาชัย สมุทรสาคร และปริมณฑล
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">เมนูหลัก</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-warm-300 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">ติดต่อเรา</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 text-warm-300 hover:text-gold transition-colors">
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-warm-300 hover:text-gold transition-colors">
                  <svg className="w-4 h-4 text-gold shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.036 2 11c0 2.67 1.213 5.07 3.124 6.756l-.752 2.808 2.887-1.52C8.44 19.649 10.17 20 12 20c5.523 0 10-4.036 10-9s-4.477-9-10-9z"/>
                  </svg>
                  LINE: {SITE.line}
                </a>
              </li>
              <li className="flex items-start gap-2 text-warm-300">
                <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {SITE.hours}
              </li>
              <li className="flex items-start gap-2 text-warm-300">
                <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {SITE.addressFull}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-500">
          <p>© {new Date().getFullYear()} {SITE.name}. สงวนลิขสิทธิ์</p>
          <div className="flex gap-6">
            <Link href="/factory-ice-mahachai" className="hover:text-gold transition-colors">โรงงานน้ำแข็งมหาชัย</Link>
            <Link href="/ice-mahachai" className="hover:text-gold transition-colors">น้ำแข็งมหาชัย</Link>
            <Link href="/ice-samut-sakhon" className="hover:text-gold transition-colors">น้ำแข็งสมุทรสาคร</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
