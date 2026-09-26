import { useTranslation } from "react-i18next";
import ContactCards from "../components/ContactSection/ContactCards";

function ContactSection() {
  const { t } = useTranslation("global");
  const cvUrl = `${import.meta.env.BASE_URL}${t("header.download-file")}`;

  return (
    <div className="body-section" id="contact_section">
      <div
        className="section section-container"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-anchor-placement="top-center"
      >
        <div className="container">
          <div className="contact-layout">
            <header className="contact-intro">
              <p className="contact-eyebrow">{t("contactSection.eyebrow")}</p>
              <h2 className="contact-heading">
                {t("contactSection.titleStart")}
                <span>{t("contactSection.titleAccent")}</span>
              </h2>
              <p className="contact-supporting-text">{t("contactSection.supportingText")}</p>
            </header>
            <ContactCards cards={t("contactSection.cards", { returnObjects: true })} />
          </div>

          <div className="contact-cv-cta">
            <p>{t("contactSection.cvMessage")}</p>
            <a className="contact-cv-button" href={cvUrl} download>
              <i className="fa-regular fa-circle-down" aria-hidden="true"></i>
              {t("header.download-button")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
