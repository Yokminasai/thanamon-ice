import Image from "next/image";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  bgImage?: string;
}

export function PageHero({ label, title, description, bgImage }: PageHeroProps) {
  return (
    <section className="relative bg-navy py-16 md:py-24 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0">
          <Image src={bgImage} alt="" fill className="object-cover opacity-20" sizes="100vw" priority />
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
      <div className="relative container-content">
        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">{label}</p>
        <h1 className="text-3xl md:text-h1 font-bold text-white mb-3 leading-snug">{title}</h1>
        {description && (
          <p className="text-warm-200 max-w-xl leading-relaxed text-sm md:text-base">{description}</p>
        )}
      </div>
    </section>
  );
}
