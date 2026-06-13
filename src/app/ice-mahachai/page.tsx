import type { Metadata } from "next";
import { SITE, FAQ_ITEMS } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "น้ำแข็งมหาชัย — สั่งซื้อน้ำแข็งโม่ น้ำแข็งก้อน ส่งถึงที่",
  description: "น้ำแข็งมหาชัย จาก ธนมน ผู้จำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต ในมหาชัย ส่งทุกวัน 03:00-18:30 โทร 061-161-9991",
  keywords: ["น้ำแข็งมหาชัย", "สั่งน้ำแข็งมหาชัย", "น้ำแข็งโม่มหาชัย", "ส่งน้ำแข็งมหาชัย"],
  alternates: { canonical: `${SITE.url}/ice-mahachai` },
};

export default function IceMahachaiPage() {
  return (
    <>
      <PageHero label="น้ำแข็ง · มหาชัย" title="น้ำแข็งมหาชัย" description="สั่งน้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต ในพื้นที่มหาชัย จากแหล่งตรง ส่งถึงที่ทุกวัน" />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader label="บริการน้ำแข็งมหาชัย" title="ซื้อน้ำแข็งในมหาชัย ราคาตรงจากโรง" subtitle="ไม่ต้องผ่านคนกลาง สั่งตรง ราคายุติธรรม คุณภาพเชื่อถือได้" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "น้ำแข็งโม่", desc: "น้ำแข็งบดละเอียด เหมาะร้านอาหารและเครื่องดื่ม" },
              { title: "น้ำแข็งก้อน", desc: "ก้อนขนาดใหญ่ ละลายช้า เหมาะแช่สินค้า" },
              { title: "น้ำแข็งยูนิต", desc: "ก้อนเล็กสม่ำเสมอ สะอาด เหมาะเสิร์ฟ" },
            ].map((item) => (
              <div key={item.title} className="bg-warm-50 border border-warm-200 p-6 hover:border-gold transition-colors">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-warm-700 mb-4">{item.desc}</p>
                <a href={`tel:${SITE.phoneRaw}`} className="text-gold text-sm font-bold hover:text-gold-dark transition-colors">สั่งซื้อ →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-texture-dots bg-warm-50">
        <div className="container-content max-w-3xl mx-auto">
          <SectionHeader label="FAQ" title="คำถามเกี่ยวกับน้ำแข็งมหาชัย" center />
          <div className="mt-10 divide-y divide-warm-200 border border-warm-200 bg-white">
            {FAQ_ITEMS.slice(0, 5).map((item, i) => (
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
          <h2 className="text-2xl font-bold text-white mb-2">สั่งน้ำแข็งมหาชัยวันนี้</h2>
          <p className="text-warm-300 mb-8">โรงน้ำแข็งธนมน · เปิดทุกวัน 03:00–18:30 น.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
