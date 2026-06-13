import type { Metadata } from "next";
import { SITE, FAQ_ITEMS, SERVICE_AREAS } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "น้ำแข็งสมุทรสาคร — ส่งน้ำแข็งทั่วจังหวัด",
  description: "น้ำแข็งสมุทรสาคร จาก ธนมน ผู้จำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต ส่งทั่วสมุทรสาคร ทุกวัน 03:00-18:30 โทร 061-161-9991",
  keywords: ["น้ำแข็งสมุทรสาคร", "โรงน้ำแข็งสมุทรสาคร", "ส่งน้ำแข็งสมุทรสาคร"],
  alternates: { canonical: `${SITE.url}/ice-samut-sakhon` },
};

export default function IceSamutSakhonPage() {
  const samutAreas = SERVICE_AREAS.filter((a) =>
    ["มหาชัย","สมุทรสาคร","เมืองสมุทรสาคร","ท่าฉลอม","กระทุ่มแบน","บ้านแพ้ว"].includes(a.name)
  );

  return (
    <>
      <PageHero label="น้ำแข็ง · สมุทรสาคร" title="น้ำแข็งสมุทรสาคร" description="ผู้จำหน่ายน้ำแข็งในจังหวัดสมุทรสาคร โรงน้ำแข็งธนมน ส่งน้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต ครอบคลุมทุกอำเภอ" />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader label="พื้นที่บริการ" title="ส่งน้ำแข็งทั่วสมุทรสาคร" subtitle="ครอบคลุมทุกอำเภอในจังหวัดสมุทรสาคร พร้อมส่งถึงหน้าร้านทุกวัน" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {samutAreas.map((area) => (
              <div key={area.name} className={`p-5 border ${area.primary ? "border-gold bg-navy" : "border-warm-200 bg-warm-50 hover:border-gold transition-colors"}`}>
                <p className={`font-bold text-sm ${area.primary ? "text-gold" : "text-navy"}`}>{area.name}</p>
                <p className={`text-xs mt-1 ${area.primary ? "text-warm-300" : "text-warm-700"}`}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-texture-dots bg-warm-50">
        <div className="container-content max-w-3xl mx-auto">
          <SectionHeader label="FAQ" title="คำถามเกี่ยวกับน้ำแข็งสมุทรสาคร" center />
          <div className="mt-10 divide-y divide-warm-200 border border-warm-200 bg-white">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="px-6 py-5">
                <p className="font-bold text-navy text-sm mb-1.5">{item.q}</p>
                <p className="text-sm text-warm-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy bg-texture-grid py-16">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-white mb-2">น้ำแข็งสมุทรสาคร — ธนมน</h2>
          <p className="text-warm-300 mb-8">แหล่งตรง · เปิดทุกวัน 03:00–18:30 น.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
