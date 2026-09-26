import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../contexts/Theme.context";
import TypeAnimationDelay from "../components/TypeAnimation";

function Presentation() {
  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation("global");

  const scrollToContact = () => {
    document
      .getElementById("contact_section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="section"
      id="home_section"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className={"container presentation-section-" + theme}>
        <div className="hero-body presentation-body">
          <div className="columns hero-columns">
            <div className="column hero-copy">
              <p className={"subtitle hero-eyebrow text-color-" + theme}>
                {t("presentation.sayHello")}
              </p>
              <p className={"title hero-title text-color-primary-" + theme}>
                <TypeAnimationDelay />
              </p>
              <p className={"text-color-" + theme + " hero-summary"}>
                {t("presentation.resume")}
              </p>
              <hr className={"hr-min-line-" + theme} />
              <button className={"btn-cta-" + theme} onClick={scrollToContact}>
                {t("presentation.cta-button")}{" "}
                <span className="hero-cta-arrow" aria-hidden="true">
                  →
                </span>
              </button>
              <nav
                className="hero-secondary-actions"
                aria-label="Professional links"
              >
                <a
                  href="https://www.linkedin.com/in/bryan-steven-zambrano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>{" "}
                  LinkedIn
                </a>
                <span
                  className="hero-action-separator"
                  aria-hidden="true"
                ></span>
                <a
                  href="https://www.figma.com/design/7Hl3EwUHwN2K9fs18dK20G/Portafolio?node-id=0-1&t=RjMDFjA1kMzPDag1-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa-regular fa-folder-open"
                    aria-hidden="true"
                  ></i>{" "}
                  {t("presentation.portfolio")}
                </a>
                <span
                  className="hero-action-separator"
                  aria-hidden="true"
                ></span>
                <a
                  href="https://github.com/Bryanz0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github" aria-hidden="true"></i>{" "}
                  GitHub
                </a>
              </nav>
            </div>
            <div className="column hero-photo-column">
              <figure className={"image figura-" + theme}>
                <img
                  src="/me/images/avatar.webp"
                  alt="Diseñador UX avatar"
                  style={{ maxHeight: "350px", borderRadius: "20px" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
