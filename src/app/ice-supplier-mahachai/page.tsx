import type { Metadata } from "next";
import { SITE, FAQ_ITEMS, PRODUCTS } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "ผู้จำหน่ายน้ำแข็งมหาชัย — B2B ราคาส่ง",
  description: "ผู้จำหน่ายน้ำแข็งมหาชัย สำหรับธุรกิจ B2B โรงน้ำแข็งธนมน จำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน ส่งทุกวัน รับปริมาณมาก โทร 061-161-9991",
  keywords: ["ผู้จำหน่ายน้ำแข็งมหาชัย", "น้ำแข็งราคาส่ง", "น้ำแข็ง B2B มหาชัย"],
  alternates: { canonical: `${SITE.url}/ice-supplier-mahachai` },
};

export default function IceSupplierMahachaiPage() {
  return (
    <>
      <PageHero label="B2B Supplier · มหาชัย" title="ผู้จำหน่ายน้ำแข็งมหาชัย" description="โรงน้ำแข็งธนมน ผู้จำหน่ายน้ำแข็งสำหรับธุรกิจในมหาชัยและสมุทรสาคร รองรับปริมาณมาก ราคายุติธรรม ส่งตรงทุกวัน" />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader label="สำหรับธุรกิจ" title="ผู้จำหน่ายน้ำแข็งที่ธุรกิจไว้วางใจ" subtitle="เราเป็นคู่ค้าระยะยาวสำหรับธุรกิจที่ต้องการน้ำแข็งคุณภาพอย่างสม่ำเสมอ" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-warm-50 border border-warm-200 p-7">
              <h3 className="text-lg font-bold text-navy mb-4">ทำไมต้องเลือกธนมน?</h3>
              <ul className="space-y-3 text-sm text-warm-700">
                {["จำหน่ายโดยตรง ไม่ผ่านคนกลาง","มีรถขนส่งของเราเอง ส่งตรงเวลา","มีถังน้ำแข็งบริการสำหรับลูกค้าประจำ","เปิดทุกวัน 03:00–18:30 น. ไม่มีวันหยุด","รับออเดอร์ล่วงหน้าได้"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
                <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-navy">LINE</a>
              </div>
            </div>
            <div className="space-y-4">
              {PRODUCTS.map((p) => (
                <div key={p.id} className="flex items-start gap-4 p-5 bg-warm-50 border border-warm-200 hover:border-gold transition-colors">
                  <div className="w-1 self-stretch bg-gold shrink-0" />
                  <div>
                    <p className="font-bold text-navy text-sm">{p.name}</p>
                    <p className="text-xs text-warm-700 mt-1">{p.desc.slice(0, 75)}…</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-texture-dots bg-warm-50">
        <div className="container-content max-w-3xl mx-auto">
          <SectionHeader label="FAQ" title="คำถามสำหรับลูกค้าธุรกิจ" center />
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
          <h2 className="text-2xl font-bold text-white mb-2">ติดต่อเพื่อสั่งซื้อและสอบถามราคา</h2>
          <p className="text-warm-300 mb-8">โรงน้ำแข็งธนมน มหาชัย · {SITE.hours}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
