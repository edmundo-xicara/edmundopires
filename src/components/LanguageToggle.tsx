import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex border border-[hsl(var(--border-strong))] font-mono text-[10px] tracking-[0.14em]",
        className
      )}
    >
      <button
        className={cn(
          "px-2.5 py-1.5 transition-colors duration-200",
          language === "pt"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        )}
        onClick={() => setLanguage("pt")}
        aria-label="Mudar para português"
      >
        PT
      </button>
      <button
        className={cn(
          "px-2.5 py-1.5 transition-colors duration-200",
          language === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        )}
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
