import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Products() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionHeader
          label="ผลิตภัณฑ์ของเรา"
          title="น้ำแข็งคุณภาพสำหรับทุกธุรกิจ"
          subtitle="เลือกน้ำแข็งที่เหมาะกับธุรกิจของคุณ ผลิตจากน้ำสะอาด กระบวนการมาตรฐานอุตสาหกรรม"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="border border-warm-200 bg-white group hover:border-gold transition-colors duration-300"
            >
              <div className="relative h-52 md:h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/20" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">{product.nameEn}</p>
                <h3 className="text-xl font-bold text-navy mb-3">{product.name}</h3>
                <p className="text-sm text-warm-700 leading-relaxed mb-5">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.uses.map((use) => (
                    <span key={use} className="text-xs bg-warm-100 text-navy px-2.5 py-1 font-medium">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/products" className="btn-outline-navy inline-flex items-center gap-2">
            ดูรายละเอียดผลิตภัณฑ์ทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
