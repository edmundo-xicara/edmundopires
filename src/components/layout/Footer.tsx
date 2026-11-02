import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HandMark } from "@/components/HandMark";

const EMAIL = "edmundopires@outlook.com";
const PHONE = "(31) 99333-1644";
const WHATSAPP = "https://wa.me/5531993331644";

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[26px] h-[26px] flex-none text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[26px] h-[26px] flex-none text-[#1FAF5A]"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
    </svg>
  );
}

export function Footer({ hideContact = false }: { hideContact?: boolean }) {
  const [emailCopied, setEmailCopied] = useState(false);
  const { t } = useLanguage();

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(
      () => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      },
      () => {
        /* clipboard refused: the address stays selectable on screen */
      },
    );
  };

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/cases", label: t("nav.cases") },
    { href: "/lab", label: t("nav.lab") },
    { href: "/contato", label: t("nav.contact") },
  ];

  const reach =
    "flex items-center gap-3 sm:gap-3.5 rounded-[18px] bg-card border border-border py-3 pl-4 pr-3 min-w-0";

  return (
    <footer className="border-t border-border">
      <div
        className={`container-wide px-5 md:px-12 lg:px-20 pb-8 ${hideContact ? "pt-2" : "pt-20 md:pt-32"}`}
      >
        {!hideContact && (
          <>
            <h2
              className="text-[clamp(36px,8vw,118px)] max-w-[12em]"
              style={{ fontVariationSettings: '"wdth" 84' }}
            >
              {t("footer.titleA")}{" "}
              <HandMark variant="under2" tail={t("footer.titleEnd")}>
                {t("footer.titleMark")}
              </HandMark>
            </h2>

            <div className="mt-10 flex flex-wrap gap-3.5">
              <div className={reach}>
                <MailIcon />
                <span className="font-mono text-[13px] sm:text-base select-all break-all">
                  {EMAIL}
                </span>
                <button
                  onClick={copyEmail}
                  className="btn-primary !px-4 !py-2 !text-sm flex-none"
                >
                  {emailCopied ? t("footer.copied") : t("footer.copy")}
                </button>
              </div>
              <div className={reach}>
                <WhatsAppIcon />
                <span className="font-mono text-sm sm:text-base select-all whitespace-nowrap">
                  {PHONE}
                </span>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !px-4 !py-2 !text-sm flex-none"
                >
                  <span className="sm:hidden">WhatsApp</span>
                  <span className="hidden sm:inline">
                    {t("footer.whatsapp")}
                  </span>
                </a>
              </div>
            </div>
          </>
        )}

        <div
          className={`${hideContact ? "mt-8" : "mt-20"} grid grid-cols-1 sm:grid-cols-2 gap-10 text-[15px]`}
        >
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="font-semibold hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
            <a
              href="https://www.linkedin.com/in/edmundo-pires-12ab89237/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Edmundo Pires</span>
          <span>{t("footer.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
