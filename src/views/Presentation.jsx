import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../contexts/Theme.context";
import TypeAnimationDelay from "../components/TypeAnimation";


function Presentation() {

    const { theme } = useContext(ThemeContext);

    const { t } = useTranslation("global");

    const scrollToContact = () => {
        document.getElementById('contact_section').scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="section" id="home_section" data-aos="zoom-in-up" data-aos-duration="1000">
            <div className={"container presentation-section-" + theme}>
                <div className="hero-body" style={{ overflow: "hidden", minHeight: "50vh"}}>
                    <div className="columns">
                        <div className="column">
                            <p className={"subtitle text-color-" + theme}>{t("presentation.sayHello")}</p>
                            <p className={"title text-color-primary-" + theme}>
                                <TypeAnimationDelay />
                            </p>
                            <p className={"text-color-" + theme} style={{ fontSize: "smaller" }} >{t("presentation.resume")}</p>
                            <hr className={"hr-min-line-" + theme} />
                            <div className="buttons">
                                <a href="https://www.linkedin.com/in/bryan-steven-zambrano/" target="_blank" rel="noopener noreferrer"><button className={"btn_social-" + theme}><i style={{ scale: "1.3" }} className="fa-brands fa-linkedin"></i></button></a>
                                <a href="https://github.com/Bryanz0" target="_blank" rel="noopener noreferrer"><button className={"btn_social-" + theme}><i style={{ scale: "1.3" }} className="fa-brands fa-github"></i></button></a>
                                <a href="https://ux-folio-bryanz.ucraft.site/" title="Portafolio de Diseño" target="_blank" rel="noopener noreferrer"><button className={"btn_social-" + theme}><i style={{ scale: "1.3" }} className="fa-regular fa-folder-open"></i></button></a>
                            </div>
                            <button className={"btn-cta-" + theme} onClick={scrollToContact}>{t("presentation.cta-button")}</button>
                        </div>
                        <div className="column" style={{ display: "flex", justifyContent: "center" }}>
                            <figure className={"image figura-" + theme}>
                                <img src="/me/images/avatar.webp" alt="Diseñador UX avatar" style={{ maxHeight: "350px", borderRadius: "20px" }} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;