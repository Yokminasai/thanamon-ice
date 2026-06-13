import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const metadata: Metadata = {
  title: "แกลเลอรี่",
  description: "ภาพผลิตภัณฑ์น้ำแข็งและการดำเนินงานของโรงงานน้ำแข็งธนมน มหาชัย สมุทรสาคร",
  alternates: { canonical: `${SITE.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero label="Gallery" title="แกลเลอรี่" description="ภาพผลิตภัณฑ์ การดำเนินงาน และบริการของเรา" />
      <GalleryGrid />
      <section className="bg-warm-50 py-12 border-t border-warm-200">
        <div className="container-content text-center">
          <p className="text-navy font-bold text-lg mb-4">สนใจสั่งซื้อ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phoneRaw}`} className="btn-primary">โทร {SITE.phone}</a>
            <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-navy">LINE {SITE.line}</a>
          </div>
        </div>
      </section>
    </>
  );
}
