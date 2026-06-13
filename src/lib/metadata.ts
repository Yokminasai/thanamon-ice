import type { Metadata } from "next";
import { SITE } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === "" ? title : `${title} | ${SITE.nameEn}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "โรงงานน้ำแข็งมหาชัย",
      "โรงน้ำแข็งมหาชัย",
      "น้ำแข็งมหาชัย",
      "น้ำแข็งสมุทรสาคร",
      "น้ำแข็งโม่มหาชัย",
      "น้ำแข็งก้อนมหาชัย",
      "ธนมน",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}
