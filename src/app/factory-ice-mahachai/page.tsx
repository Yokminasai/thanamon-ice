import type { Metadata } from "next";
import { SITE, FAQ_ITEMS, PRODUCTS } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "โรงงานน้ำแข็งมหาชัย — ผู้ผลิตน้ำแข็งโม่ น้ำแข็งก้อน",
  description: "โรงงานน้ำแข็งมหาชัย ธนมน ผู้ผลิตและจำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต ส่งถึงที่ทุกวัน 03:00-18:30 โทร 061-161-9991",
  keywords: ["โรงงานน้ำแข็งมหาชัย", "โรงน้ำแข็งมหาชัย", "ผลิตน้ำแข็งมหาชัย"],
  alternates: { canonical: `${SITE.url}/factory-ice-mahachai` },
};

const LOCAL_FAQ = [
  { q: "โรงงานน้ำแข็งธนมนตั้งอยู่ที่ไหน?", a: "ตั้งอยู่ในพื้นที่มหาชัย จังหวัดสมุทรสาคร ให้บริการจัดส่งน้ำแข็งในพื้นที่สมุทรสาครและปริมณฑล" },
  { q: "โรงงานน้ำแข็งมหาชัยเปิดกี่โมง?", a: "เปิดทุกวัน 03:00 – 18:30 น. ไม่มีวันหยุด พร้อมจัดส่งตั้งแต่เช้าตรู่" },
  { q: "ผลิตน้ำแข็งประเภทอะไรบ้าง?", a: "ผลิตน้ำแข็งโม่ น้ำแข็งก้อน และน้ำแข็งยูนิต เหมาะสำหรับทุกธุรกิจ" },
  ...FAQ_ITEMS.slice(0, 3),
];

export default function FactoryIceMahachaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: LOCAL_FAQ.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
      })}} />

      <PageHero
        label="มหาชัย สมุทรสาคร"
        title="โรงงานน้ำแข็งมหาชัย"
        description="โรงงานน้ำแข็งธนมน มหาชัย ผู้ผลิตและจำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต คุณภาพสูง พร้อมจัดส่งถึงที่ทุกวัน"
        bgImage="/รูปในโรงงาน (3).jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader label="ทำไมต้องธนมน" title="โรงงานน้ำแข็งที่มหาชัยไว้วางใจ" />
              <div className="space-y-4 text-sm text-warm-700 leading-relaxed">
                <p>โรงงานน้ำแข็งธนมนเป็นผู้ผลิตและจำหน่ายน้ำแข็งในพื้นที่มหาชัย สมุทรสาคร ที่ร้านค้า ตลาดสด ร้านอาหาร และธุรกิจท้องถิ่นให้ความไว้วางใจ</p>
                <p>เราผลิตน้ำแข็งจากน้ำสะอาด ผ่านกระบวนการกรองและฆ่าเชื้อมาตรฐาน มีรถขนส่งของเราเองพร้อมถังน้ำแข็งบริการ ส่งตรงถึงหน้าร้านทุกวัน</p>
                <p>เปิดบริการตั้งแต่ 03:00 น. เพื่อให้ธุรกิจของคุณเริ่มต้นวันใหม่ด้วยน้ำแข็งสดใหม่</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
                <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-navy">LINE {SITE.line}</a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PRODUCTS.map((p) => (
                <div key={p.id} className="bg-warm-50 border border-warm-200 p-5 text-center hover:border-gold transition-colors">
                  <p className="font-bold text-navy text-sm mb-1">{p.name}</p>
                  <p className="text-xs text-warm-700">{p.nameEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-texture-dots bg-warm-50">
        <div className="container-content max-w-3xl mx-auto">
          <SectionHeader label="คำถามที่พบบ่อย" title="โรงงานน้ำแข็งมหาชัย FAQ" center />
          <div className="mt-10 divide-y divide-warm-200 border border-warm-200 bg-white">
            {LOCAL_FAQ.map((item, i) => (
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
          <h2 className="text-2xl font-bold text-white mb-2">โรงงานน้ำแข็งมหาชัย — ธนมน</h2>
          <p className="text-warm-300 mb-8">เปิดทุกวัน 03:00 – 18:30 น. | มหาชัย สมุทรสาคร</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
