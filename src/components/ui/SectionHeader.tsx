interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({ label, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${light ? "text-gold" : "text-gold"}`}>
          {label}
        </p>
      )}
      <h2 className={`text-h2 font-bold leading-snug ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <span className={`block w-12 h-0.5 mt-3 mb-5 ${center ? "mx-auto" : ""} ${light ? "bg-gold" : "bg-gold"}`} />
      {subtitle && (
        <p className={`text-base max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-warm-200" : "text-warm-700"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
