import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const isEn = language === "en";

  return (
    <div
      className={cn(
        "relative inline-flex h-8 w-14 cursor-pointer items-center rounded-full border border-border bg-muted p-1 transition-colors duration-250",
        className
      )}
      onClick={() => setLanguage(isEn ? "pt" : "en")}
      role="button"
      tabIndex={0}
      aria-label={isEn ? "Mudar para português" : "Switch to English"}
    >
      <div
        className={cn(
          "relative h-6 w-6 rounded-full bg-background shadow-sm transition-transform duration-250 flex items-center justify-center",
          isEn ? "translate-x-6" : "translate-x-0"
        )}
      >
        <span className="text-[10px] font-semibold text-foreground select-none">
          {isEn ? "EN" : "PT"}
        </span>
      </div>
    </div>
  );
}
