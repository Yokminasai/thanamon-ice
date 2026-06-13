import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "ติดต่อเรา",
  description: `ติดต่อโรงน้ำแข็งธนมน มหาชัย โทร ${SITE.phone} LINE ${SITE.line} เปิดทุกวัน ${SITE.hours}`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }} />
      <PageHero label="Contact" title="ติดต่อเรา" description="โทรหรือ LINE ได้เลย ทีมงานพร้อมให้บริการทุกวัน" />
      <ContactSection />
      <FAQSection />
    </>
  );
}
