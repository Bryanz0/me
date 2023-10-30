import {useTranslation} from "react-i18next"
import ContactCards from "../components/ContactSection/ContactCards";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context";

function ContactSection () {

  const {theme} = useContext(ThemeContext);

    const {t} = useTranslation("global");


    return (
        <div className="body-section" id="contact_section">
          <div className="section" data-aos="zoom-in-right" data-aos-duration="750"
            data-aos-anchor-placement="top-center">
            <div className="container">
              <div className="columns section-div">
                <div className="column is-one-quarter is-4">
                  <h1 className={"tittle-section text-color-"+theme}>{t("contactTitle")}</h1>
                </div>
                <div className="column auto">
                  <hr className={"section-line-"+theme}/>
                </div>
              </div>
              <div className="section-content">
                <div className="columns is-centered">
                  <ContactCards cards={t("contactSection",{returnObjects: true})} />
                </div>
                <div className="columns is-flex" style={{alignItems: "center", justifyContent: "center"}}>
                  <div className="column">
                    <p className={"text-color-"+theme} style={{textAlign: "center"}}>{t("contactMessage")} <span><a className={"a-"+theme} style={{display: "table-cell"}} href="documents/CV_Bryan_Zambrano.pdf" target="_blank" download>{t("downloadMessage")}</a></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ContactSection;