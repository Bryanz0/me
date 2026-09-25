import { useState } from "react";
import { useTranslation } from "react-i18next";

function copyWithFallback(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function ContactCards({ cards }) {
  const { t } = useTranslation("global");
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (card) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(card.contactInfo);
      } else {
        copyWithFallback(card.contactInfo);
      }

      setCopiedId(card.id);
      window.setTimeout(() => setCopiedId(null), 1500);
    } catch {
      copyWithFallback(card.contactInfo);
      setCopiedId(card.id);
      window.setTimeout(() => setCopiedId(null), 1500);
    }
  };

  return (
    <div className="contact-card-grid">
      {cards.map((card) => {
        const isExternal = card.contactLink.startsWith("http");
        const isCopied = copiedId === card.id;

        return (
          <article className="contact-method-card" key={card.id}>
            <a
              className="contact-method-link"
              href={card.contactLink}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              aria-label={t("contactSection.openContact", { contact: card.contact })}
            >
              <span className="contact-method-icon">
                <img src={card.contactImage} alt="" />
              </span>
              <h3>{card.contact}</h3>
            </a>
            <p className="contact-method-description">{card.description}</p>
            <div className="contact-value-row">
              <span>{card.contactInfo}</span>
              <button
                type="button"
                onClick={() => handleCopy(card)}
                aria-label={t("contactSection.copyValue", { value: card.contactInfo })}
                title={isCopied ? t("contactSection.copied") : t("contactSection.copy")}
              >
                <i className={isCopied ? "fa-solid fa-clipboard-check" : "fa-regular fa-copy"} aria-hidden="true"></i>
                <span className="is-sr-only">{isCopied ? t("contactSection.copied") : t("contactSection.copy")}</span>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ContactCards;
