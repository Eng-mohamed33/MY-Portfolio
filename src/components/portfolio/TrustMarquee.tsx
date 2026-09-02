const items = [
  "INNOVATIVE DESIGNS",
  "TOP PERFORMANCE",
  "RELIABLE SUPPORT",
  "CUTTING EDGE TECH",
  "USER FRIENDLY",
  "SCALABLE SOLUTIONS",
  "FAST INTEGRATION",
  "SECURE PLATFORM",
  "CLEAN CODE",
  "DATA DRIVEN",
  "MOBILE OPTIMIZED",
  "FAST LEARNER",
];

const TrustMarquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="relative bg-primary py-5 overflow-hidden">
      <div className="flex w-max animate-[marquee_24s_linear_infinite]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-6 text-lg md:text-2xl font-display text-primary-foreground flex items-center gap-6"
          >
            {item}
            <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TrustMarquee;
