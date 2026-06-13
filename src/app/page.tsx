import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { SocialProof } from "@/components/sections/SocialProof";
import { Products } from "@/components/sections/Products";
import { BusinessCustomers } from "@/components/sections/BusinessCustomers";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `${SITE.name} | ผู้จำหน่ายน้ำแข็งโม่ น้ำแข็งก้อน มหาชัย สมุทรสาคร`,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }} />
      <Hero />
      <TrustBar />
      <SocialProof />
      <Products />
      <BusinessCustomers />
      <ServiceAreas />
      <GalleryGrid />
      <ContactSection />
      <FAQSection />
    </>
  );
}
