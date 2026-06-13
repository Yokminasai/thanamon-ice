import type { Metadata } from "next";
import { SERVICE_AREAS, SITE } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "พื้นที่ให้บริการ",
  description: "โรงน้ำแข็งธนมนให้บริการจัดส่งน้ำแข็งในมหาชัย สมุทรสาคร กรุงเทพฯ นนทบุรี และปทุมธานี",
  alternates: { canonical: `${SITE.url}/service-areas` },
};

export default function ServiceAreasPage() {
  const primary = SERVICE_AREAS.filter((a) => a.primary);
  const secondary = SERVICE_AREAS.filter((a) => !a.primary);

  return (
    <>
      <PageHero label="Service Areas" title="พื้นที่ให้บริการ" description="จัดส่งน้ำแข็งถึงที่ ครอบคลุมสมุทรสาครและปริมณฑล" />

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="mb-10">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">พื้นที่หลัก</p>
            <h2 className="text-2xl md:text-h2 font-bold text-navy mb-2">มหาชัย & สมุทรสาคร</h2>
            <span className="block w-12 h-0.5 bg-gold mb-6" />
            <p className="text-warm-700 max-w-2xl text-sm md:text-base">
              พื้นที่หลักที่เราให้บริการจัดส่งครอบคลุมทุกซอยทุกถนนในมหาชัยและสมุทรสาคร ส่งตรงตั้งแต่ 03:00 น. ทุกวัน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {primary.map((area) => (
              <div key={area.name} className="flex items-start gap-5 p-6 bg-navy border-l-4 border-gold">
                <div className="w-2.5 h-2.5 rounded-full bg-gold shrink-0 mt-1.5" />
                <div>
                  <p className="text-white font-bold text-base">{area.name}</p>
                  <p className="text-warm-300 text-sm mt-1">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">พื้นที่ปริมณฑล</p>
          <h3 className="text-xl font-bold text-navy mb-2">บริการนอกพื้นที่</h3>
          <span className="block w-12 h-0.5 bg-gold mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondary.map((area) => (
              <div key={area.name} className="flex items-start gap-4 p-5 bg-warm-50 border border-warm-200 hover:border-gold transition-colors">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1.5" />
                <div>
                  <p className="font-bold text-navy text-sm">{area.name}</p>
                  <p className="text-warm-700 text-xs mt-0.5">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-texture-dots bg-warm-100 py-12 border-y border-warm-200">
        <div className="container-content text-center">
          <p className="text-navy font-bold text-base mb-2">ไม่เห็นพื้นที่ของคุณ?</p>
          <p className="text-warm-700 mb-6 text-sm">ติดต่อสอบถามได้โดยตรง เราพยายามให้บริการทุกพื้นที่ที่เป็นไปได้</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-navy">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
