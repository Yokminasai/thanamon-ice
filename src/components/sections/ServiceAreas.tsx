import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServiceAreas() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-content">
        <SectionHeader
          label="พื้นที่ให้บริการ"
          title="ส่งถึงที่ ทั่วสมุทรสาคร และปริมณฑล"
          subtitle="ครอบคลุมพื้นที่กว้าง ส่งตรงถึงหน้าร้านของคุณ"
          light
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.name}
              className={`flex items-start gap-4 p-5 border ${area.primary ? "border-gold bg-white/5" : "border-white/10 bg-white/[0.03]"}`}
            >
              <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${area.primary ? "bg-gold" : "bg-white/30"}`} />
              <div>
                <p className={`font-bold text-sm ${area.primary ? "text-gold" : "text-white"}`}>{area.name}</p>
                <p className="text-warm-300 text-xs mt-0.5">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/service-areas" className="btn-outline inline-flex items-center gap-2">
            ดูพื้นที่บริการทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
