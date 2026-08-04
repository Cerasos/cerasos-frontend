/** Wide-then-narrow diagonal rules that sit under the hero. */
export const HERO_TEXTURE =
  "repeating-linear-gradient(38deg, rgba(23,17,15,0.07) 0 1px, transparent 1px 30px, rgba(23,17,15,0.07) 30px 31px, transparent 31px 240px)";

const STREAKS = [
  { top: "0", left: "0", delay: "0.8s" },
  { top: "8vh", left: "30vw", delay: "6.4s" },
  { top: "34vh", left: "62vw", delay: "3.2s" },
];

export default function Meteors() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {STREAKS.map((streak) => (
        <span
          key={streak.delay}
          className="meteor"
          style={
            {
              top: streak.top,
              left: streak.left,
              "--delay": streak.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
