import { SITE, FAQ_ITEMS } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    openingHours: "Mo-Su 03:00-18:30",
    address: {
      "@type": "PostalAddress",
      streetAddress: "มหาชัย",
      addressLocality: "สมุทรสาคร",
      postalCode: "74000",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.lat,
      longitude: SITE.lng,
    },
    sameAs: [SITE.lineUrl],
    priceRange: "฿",
    image: `${SITE.url}/og-image.jpg`,
    areaServed: [
      "มหาชัย", "สมุทรสาคร", "กระทุ่มแบน", "บ้านแพ้ว",
      "กรุงเทพมหานคร", "นนทบุรี", "ปทุมธานี",
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneRaw,
      contactType: "sales",
      availableLanguage: ["Thai"],
      hoursAvailable: { "@type": "OpeningHoursSpecification", opens: "03:00", closes: "18:30" },
    },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
