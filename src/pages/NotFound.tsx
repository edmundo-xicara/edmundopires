import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground flex items-center justify-center gap-3 mb-6">
          <span className="w-7 h-px bg-accent inline-block" />
          404
        </div>
        <h1 className="font-heading text-[clamp(48px,8vw,96px)] font-medium mb-6 leading-none">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          {t("notFound.message")}
        </p>
        <Link to="/" className="btn-primary">
          {t("notFound.back")}
          <ArrowRight className="ml-2" size={14} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
