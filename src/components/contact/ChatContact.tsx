import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { prefersReducedMotion } from "@/lib/motion";

const EMAIL = "edmundopires@outlook.com";
const PHONE = "(31) 99333-1644";
const WHATSAPP = "https://wa.me/5531993331644";
const LINKEDIN = "https://www.linkedin.com/in/edmundo-pires-12ab89237/";
const PHOTO = "/contact/edmundo.webp";

const STEP = 1100; // ms between messages
const TYPING = 650; // ms the typing dots show before a message lands

const Icon = ({ id }: { id: "mail" | "wa" | "in" }) =>
  id === "mail" ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ) : id === "wa" ? (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75ZM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.6 4.77 6V21h-4v-5c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.64V21h-4V9.75Z" />
    </svg>
  );

/** The contact page on phones, as a chat: messages arrive one by one, then quick replies open each channel. */
export function ChatContact({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const messages = ["contato.chat.hi", "contato.chat.what", "card", "contato.chat.where"];
  // how many messages have landed, and whether the next one is being typed
  const [landed, setLanded] = useState(() => (prefersReducedMotion() ? messages.length : 0));
  const [typing, setTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timers: number[] = [];
    messages.forEach((_, i) => {
      timers.push(window.setTimeout(() => setTyping(true), 300 + i * STEP));
      timers.push(
        window.setTimeout(() => {
          setTyping(false);
          setLanded(i + 1);
        }, 300 + i * STEP + TYPING),
      );
    });
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const copy = () =>
    navigator.clipboard.writeText(EMAIL).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      },
      () => {
        /* clipboard refused: the address is in the card above */
      },
    );

  const done = landed >= messages.length;

  return (
    <div className={`chat-contact ${className}`} aria-live="polite">
      {messages.slice(0, landed).map((m, i) => (
        <div key={m} className="msg">
          <span className={`av${i === messages.length - 1 ? "" : " ghost"}`} style={{ backgroundImage: `url(${PHOTO})` }} aria-hidden />
          {m === "card" ? (
            <div className="card-msg">
              <div className="ph" style={{ backgroundImage: `url(${PHOTO})` }} role="img" aria-label={t("contato.photoAlt")} />
              <div className="in">
                <div className="nm">Edmundo Pires</div>
                <div className="rl">{t("contato.chat.role")}</div>
              </div>
            </div>
          ) : (
            <span className="bubble">{t(m)}</span>
          )}
        </div>
      ))}

      {typing && (
        <div className="msg" aria-hidden>
          <span className="av ghost" />
          <span className="bubble typing">
            <i />
            <i />
            <i />
          </span>
        </div>
      )}

      {done && (
        <div className="quick">
          <span className="lead">{t("contato.chat.reply")}</span>
          <a className="reply wa" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Icon id="wa" />
            WhatsApp · {PHONE}
          </a>
          <button className="reply" type="button" onClick={copy}>
            <Icon id="mail" />
            {copied ? t("contato.emailCopied") : t("contato.chat.copy")}
          </button>
          <a className="reply ln" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            <Icon id="in" />
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
}
