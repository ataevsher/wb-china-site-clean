interface SectionBgProps {
  src: string;
  opacity?: number;
}

const SectionBg = ({ src, opacity = 0.55 }: SectionBgProps) => (
  <div className="absolute inset-0 overflow-hidden">
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity }}
    />
    {/* Gradient overlay to protect text readability */}
    <div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(180deg, hsl(220 25% 97% / 0.3) 0%, hsl(220 25% 97% / 0.12) 50%, hsl(220 25% 97% / 0.3) 100%)`,
      }}
    />
  </div>
);

export default SectionBg;
