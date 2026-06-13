import Image from "next/image";
import { SITE } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div>
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">ติดต่อเรา</p>
            <h2 className="text-h2 font-bold text-navy mb-2">สั่งน้ำแข็งได้ทันที</h2>
            <span className="block w-12 h-0.5 bg-gold mb-6" />
            <p className="text-warm-700 mb-8 leading-relaxed">
              โทรหาเราโดยตรง หรือส่งข้อความผ่าน LINE เพื่อสั่งน้ำแข็งและสอบถามราคา
              ทีมงานพร้อมตอบทุกวัน ตั้งแต่ 03:00 น.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-5 p-5 bg-white border border-warm-200 hover:border-gold transition-colors group"
              >
                <div className="w-12 h-12 bg-gold flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-warm-500 font-semibold mb-0.5">โทรศัพท์</p>
                  <p className="text-navy font-bold text-xl group-hover:text-gold transition-colors">{SITE.phone}</p>
                </div>
              </a>

              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 bg-white border border-warm-200 hover:border-gold transition-colors group"
              >
                <div className="w-12 h-12 bg-[#06C755] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.036 2 11c0 2.67 1.213 5.07 3.124 6.756l-.752 2.808 2.887-1.52C8.44 19.649 10.17 20 12 20c5.523 0 10-4.036 10-9s-4.477-9-10-9z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-warm-500 font-semibold mb-0.5">LINE</p>
                  <p className="text-navy font-bold text-xl group-hover:text-gold transition-colors">{SITE.line}</p>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 bg-white border border-warm-200">
                <div className="w-12 h-12 bg-navy flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-warm-500 font-semibold mb-0.5">เวลาทำการ</p>
                  <p className="text-navy font-bold text-xl">{SITE.hours}</p>
                </div>
              </div>
            </div>

            {/* Business card — trust signal */}
            <div className="mt-6 relative aspect-[1.75] w-full max-w-sm overflow-hidden border border-warm-200">
              <Image src="/นามบัตร.jpg" alt="นามบัตรโรงงานน้ำแข็งธนมน" fill className="object-cover" sizes="(max-width: 640px) 100vw, 384px" />
            </div>
          </div>

          {/* Map */}
          <div className="border border-warm-200 overflow-hidden">
            <iframe
              src={`https://maps.google.com/maps?q=${SITE.lat},${SITE.lng}&z=15&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ที่ตั้งโรงงานน้ำแข็งธนมน มหาชัย"
            />
            <div className="bg-white p-4 border-t border-warm-200">
              <p className="text-sm font-bold text-navy">{SITE.name}</p>
              <p className="text-xs text-warm-700 mt-0.5">{SITE.addressFull}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
