import type { Metadata } from "next";
import Image from "next/image";
import { PRODUCTS, SITE } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "ผลิตภัณฑ์น้ำแข็ง",
  description: "น้ำแข็งโม่ น้ำแข็งก้อน น้ำแข็งยูนิต คุณภาพสูง ผลิตโดยโรงงานน้ำแข็งธนมน มหาชัย สมุทรสาคร",
  alternates: { canonical: `${SITE.url}/products` },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero label="Products" title="ผลิตภัณฑ์ของเรา" description="น้ำแข็งโม่ น้ำแข็งก้อน และน้ำแข็งยูนิต สำหรับทุกธุรกิจ" />

      <section className="section-padding bg-white">
        <div className="container-content space-y-16 md:space-y-20">
          {PRODUCTS.map((product, i) => (
            <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{product.nameEn}</p>
                <h2 className="text-2xl md:text-h2 font-bold text-navy mb-2">{product.name}</h2>
                <span className="block w-12 h-0.5 bg-gold mb-6" />
                <p className="text-warm-700 leading-relaxed mb-7 text-sm md:text-base">{product.desc}</p>
                <div className="mb-8">
                  <p className="text-xs font-bold text-navy uppercase tracking-wider mb-3">เหมาะสำหรับ</p>
                  <div className="flex flex-wrap gap-2">
                    {product.uses.map((use) => (
                      <span key={use} className="text-sm bg-warm-100 border border-warm-200 text-navy px-3 py-1.5 font-medium">{use}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">สั่งซื้อ {SITE.phone}</a>
                  <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-navy">LINE</a>
                </div>
              </div>
              <div className={`relative h-64 md:h-80 lg:h-96 overflow-hidden border border-warm-200 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy bg-texture-grid py-16">
        <div className="container-content text-center">
          <SectionHeader label="ติดต่อสั่งซื้อ" title="พร้อมจัดส่งทุกวัน 03:00 – 18:30 น." center light />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
