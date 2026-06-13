import Image from "next/image";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="/โรงงานน้ำแข็ง.png"
          alt="โรงงานน้ำแข็งธนมน มหาชัย"
          fill
          className="object-cover object-center opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      <div className="relative container-content w-full py-24">
        <div className="max-w-3xl">
          <p className="hero-line-1 text-gold text-sm font-bold uppercase tracking-widest mb-4">
            Thanamon Ice · มหาชัย สมุทรสาคร
          </p>
          <h1 className="hero-line-2 text-4xl sm:text-5xl lg:text-display font-bold text-white leading-tight mb-6">
            โรงงานน้ำแข็ง<br />
            <span className="text-gold">ธนมน มหาชัย</span>
          </h1>
          <p className="hero-line-3 text-warm-200 text-lg leading-relaxed max-w-2xl mb-10">
            ผู้ผลิตและจัดจำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน และน้ำแข็งยูนิต
            พร้อมบริการจัดส่งสำหรับร้านอาหาร ร้านค้า ตลาดสด งานอีเว้นท์
            และธุรกิจในพื้นที่มหาชัย สมุทรสาคร และปริมณฑล
          </p>
          <div className="hero-line-4 flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary text-lg px-10 py-5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              โทร {SITE.phone}
            </a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-lg px-10 py-5">
              LINE: {SITE.line}
            </a>
          </div>
          <div className="hero-line-5 mt-12 flex flex-wrap gap-6 text-sm text-warm-300">
            {["เปิดทุกวัน 03:00–18:30 น.", "ผลิตและจัดส่งโดยตรง", "มีถังน้ำแข็งบริการ"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
