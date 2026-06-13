import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: `โรงน้ำแข็งธนมน มหาชัย — ผู้จัดจำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต ในพื้นที่มหาชัยและสมุทรสาคร`,
  alternates: { canonical: `${SITE.url}/about` },
};

const MILESTONES = [
  { year: "ก่อตั้ง", title: "เริ่มต้นธุรกิจในมหาชัย", desc: "ก่อตั้งโรงน้ำแข็งธนมนในพื้นที่มหาชัย สมุทรสาคร ด้วยทุนและความตั้งใจของครอบครัว" },
  { year: "ขยาย", title: "ขยายปริมาณสินค้า", desc: "ขยายปริมาณสินค้าและรถขนส่ง รองรับลูกค้าที่เพิ่มขึ้นในพื้นที่สมุทรสาคร" },
  { year: "ปัจจุบัน", title: "บริการครอบคลุมปริมณฑล", desc: "ขยายพื้นที่จัดส่งไปยังกรุงเทพฯ นนทบุรี และปทุมธานี พร้อมรถขนส่งและถังน้ำแข็งของตนเอง" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="เกี่ยวกับเรา"
        description="โรงน้ำแข็งธนมน มหาชัย — ผู้จัดจำหน่ายน้ำแข็งคุณภาพสำหรับธุรกิจ"
        bgImage="/รูปในโรงงาน (1).jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                label="ประวัติบริษัท"
                title="โรงน้ำแข็งธนมน มหาชัย"
                subtitle="เรายึดมั่นในคุณภาพและความน่าเชื่อถือมาตลอด พร้อมให้บริการทุกวันตั้งแต่เช้าตรู่เพื่อให้ธุรกิจของลูกค้าดำเนินต่อไปได้อย่างราบรื่น"
              />
              <div className="space-y-4 text-warm-700 text-sm leading-relaxed">
                <p>โรงน้ำแข็งธนมนก่อตั้งขึ้นในพื้นที่มหาชัย จังหวัดสมุทรสาคร ด้วยเป้าหมายเดียวคือการเป็นผู้จำหน่ายน้ำแข็งที่ธุรกิจในท้องถิ่นวางใจได้</p>
                <p>เราจำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน และน้ำแข็งยูนิต คัดสรรคุณภาพ รับประกันความสะอาดและความปลอดภัยทุกชิ้น</p>
                <p>ด้วยรถขนส่งและถังน้ำแข็งของเราเอง เราสามารถส่งน้ำแข็งถึงหน้าร้านของลูกค้าได้ตรงเวลา ทุกวัน ไม่มีวันหยุด ตั้งแต่ 03:00 น.</p>
              </div>
            </div>
            <div className="relative h-72 md:h-80 lg:h-96 overflow-hidden border border-warm-200">
              <Image
                src="/รูปในโรงงาน (2).jpg"
                alt="การจำหน่ายน้ำแข็งคุณภาพ" fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-texture-dots bg-warm-50">
        <div className="container-content">
          <SectionHeader label="การเติบโต" title="เส้นทางของเรา" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {MILESTONES.map((m) => (
              <div key={m.year} className="bg-white border border-warm-200 p-7">
                <span className="text-gold text-xs font-bold uppercase tracking-widest">{m.year}</span>
                <h3 className="text-lg font-bold text-navy mt-2 mb-3">{m.title}</h3>
                <p className="text-sm text-warm-700 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy bg-texture-grid py-16">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-white mb-3">พร้อมให้บริการทุกวัน</h2>
          <p className="text-warm-300 mb-8">{SITE.hours}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
