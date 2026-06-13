"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

function useCountUp(target: number, duration = 1200, run: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [run, target, duration]);
  return val;
}

const STATS = [
  { display: "03:00", countTo: null, suffix: "น.",    label: "เริ่มจัดส่งตั้งแต่" },
  { display: "7",     countTo: 7,    suffix: "วัน",   label: "เปิดทุกวันไม่หยุด" },
  { display: "9",     countTo: 9,    suffix: "+พื้นที่", label: "เขตจัดส่งครอบคลุม" },
  { display: "3",     countTo: 3,    suffix: "ชนิด",  label: "ประเภทน้ำแข็งคุณภาพ" },
];

function StatItem({ stat, run }: { stat: typeof STATS[0]; run: boolean }) {
  const count = useCountUp(stat.countTo ?? 0, 1400, run && stat.countTo !== null);
  const display = stat.countTo !== null ? count : stat.display;
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl md:text-4xl font-bold text-navy tabular-nums">{display}</span>
        <span className="text-gold font-bold text-sm">{stat.suffix}</span>
      </div>
      <p className="text-warm-700 text-xs mt-1.5 font-medium">{stat.label}</p>
    </div>
  );
}

export function SocialProof() {
  const { ref, inView } = useInView(0.3);
  return (
    <section className="bg-warm-100 border-y border-warm-200 py-0" ref={ref}>
      <div className="container-content">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-warm-200">
          {STATS.map((s) => <StatItem key={s.label} stat={s} run={inView} />)}
        </div>
      </div>
    </section>
  );
}
