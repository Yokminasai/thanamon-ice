import Image from "next/image";

// All 21 real factory photos — every 3rd is tall for masonry rhythm
const PHOTOS: { src: string; alt: string; tall: boolean }[] = [
  { src: "/โรงงานรูปด้านหน้า.png", alt: "โรงน้ำแข็งธนมน มหาชัย ด้านหน้า", tall: true  },
  { src: "/รูปโรงงานตอนเย็นๆ.png", alt: "โรงน้ำแข็งธนมน มหาชัย ยามเย็น",  tall: false },
  { src: "/รูปในโรงงาน (3).jpg",  alt: "เครื่องจักรจำหน่ายน้ำแข็ง",    tall: false },
  { src: "/รูปในโรงงาน (5).jpg",  alt: "การดำเนินงาน",              tall: false },
  { src: "/รูปในโรงงาน (6).jpg",  alt: "น้ำแข็งโม่พร้อมส่ง",        tall: false },
  { src: "/รูปในโรงงาน (7).jpg",  alt: "โกดังเก็บน้ำแข็ง",          tall: true  },
  { src: "/รูปในโรงงาน (8).jpg",  alt: "ถังน้ำแข็งบริการ",           tall: false },
  { src: "/รูปในโรงงาน (11).jpg", alt: "น้ำแข็งออกจากแม่พิมพ์",      tall: false },
  { src: "/รูปในโรงงาน (12).jpg", alt: "คลังสินค้าน้ำแข็ง",          tall: false },
  { src: "/รูปในโรงงาน (13).jpg", alt: "เครื่องบดน้ำแข็ง",           tall: true  },
  { src: "/รูปในโรงงาน (14).jpg", alt: "บรรจุถุงน้ำแข็ง",            tall: false },
  { src: "/รูปในโรงงาน (15).jpg", alt: "น้ำแข็งพร้อมจัดส่ง",         tall: false },
  { src: "/รูปในโรงงาน (16).jpg", alt: "ทีมงานโรงน้ำแข็ง",        tall: true  },
  { src: "/รูปในโรงงาน (17).jpg", alt: "รถขนส่งน้ำแข็งธนมน",         tall: false },
  { src: "/รูปในโรงงาน (18).jpg", alt: "การจัดส่งน้ำแข็ง",           tall: false },
  { src: "/รูปในโรงงาน (19).jpg", alt: "น้ำแข็งสดก่อนส่ง",          tall: true  },
  { src: "/รูปในโรงงาน (20).jpg", alt: "ภายในโรงน้ำแข็ง",         tall: false },
  { src: "/รูปในโรงงาน (21).jpg", alt: "ผลิตภัณฑ์น้ำแข็งธนมน",       tall: false },
];

export function GalleryGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="mb-10">
          <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">แกลเลอรี่</p>
          <h2 className="text-h2 font-bold text-navy">ภาพกิจกรรมและผลิตภัณฑ์</h2>
          <span className="block w-12 h-0.5 bg-gold mt-3" />
        </div>

        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {PHOTOS.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden break-inside-avoid ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
