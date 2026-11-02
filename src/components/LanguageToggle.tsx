import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

/** PT/EN as a toggle: the thumb slides to the chosen language. Styled for the dark capsule. */
export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={cn("lang-toggle", className)} data-v={language} role="group" aria-label={t("nav.language")}>
      <span className="thumb" aria-hidden />
      <button type="button" aria-pressed={language === "pt"} onClick={() => setLanguage("pt")} aria-label="Mudar para português">
        PT
      </button>
      <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")} aria-label="Switch to English">
        EN
      </button>
    </div>
  );
}
