import Image from "next/image";

import logoMark from "@/assets/logos/logo-min.png";

/**
 * The source PNG is a 1024² canvas with the apple sitting in roughly the middle
 * third, so it needs recentring and scaling up to read at 18–20px.
 */
const MARK_CROP = "scale(1.8) translate(1.6%, 11.5%)";

type BrandMarkProps = {
  size?: number;
  className?: string;
};

export default function BrandMark({ size = 20, className }: BrandMarkProps) {
  return (
    <span
      className={`flex items-center gap-[9px] text-[15px] leading-none font-bold tracking-[-0.01em] ${className ?? ""}`}
    >
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: size, height: size }}
      >
        <Image
          src={logoMark}
          alt=""
          fill
          sizes="24px"
          priority
          className="object-contain"
          style={{ transform: MARK_CROP }}
        />
      </span>
      Cerasos
    </span>
  );
}
