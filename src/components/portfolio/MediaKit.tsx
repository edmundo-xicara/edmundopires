import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { mediaKit } from "@/data/portfolio";
import { useReveal } from "@/lib/motion";

const ZOOM = 2.4;
const LENS = 220;

/** The media kit, with a round magnifier that follows the pointer. */
export function MediaKit() {
  const { t } = useLanguage();
  const [ref, shown] = useReveal<HTMLAnchorElement>();
  const lens = useRef<HTMLSpanElement>(null);

  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = lens.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.backgroundSize = `${r.width * ZOOM}px ${r.height * ZOOM}px`;
    el.style.backgroundPosition = `${-(x * ZOOM - LENS / 2)}px ${-(y * ZOOM - LENS / 2)}px`;
  };

  return (
    <a
      ref={ref}
      className={`pf-kit${shown ? "" : " pending"}`}
      href={mediaKit.href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={move}
    >
      <img src={mediaKit.img} alt={t("portfolio.kit.alt")} loading="lazy" />
      <span ref={lens} className="lens" style={{ backgroundImage: `url(${mediaKit.img})` }} aria-hidden />
      <span className="btn-primary cta">{t("portfolio.kit.open")} ↗</span>
    </a>
  );
}
