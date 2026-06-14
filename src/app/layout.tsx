import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { SITE } from "@/lib/constants";
import { localBusinessSchema, organizationSchema } from "@/lib/schema";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ผู้จำหน่ายน้ำแข็งมหาชัย`,
    template: `%s | ${SITE.nameEn}`,
  },
  description: SITE.description,
  keywords: ["โรงน้ำแข็งมหาชัย", "โรงน้ำแข็งมหาชัย", "น้ำแข็งมหาชัย", "น้ำแข็งสมุทรสาคร", "น้ำแข็งโม่มหาชัย", "น้ำแข็งก้อนมหาชัย"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: { siteName: SITE.name, locale: SITE.locale, type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={kanit.variable}>
      <head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      </head>
      <body className="font-sans">
        <Header />
        {/* pb-20 on mobile to clear the fixed CTA bar */}
        <main className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
