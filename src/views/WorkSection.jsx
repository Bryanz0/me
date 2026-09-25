import {useTranslation} from "react-i18next";
import WorkTabs from "../components/WorkSection/WorkTabs";


function WorkSection (){
    const {t} = useTranslation("global");

    return (
        <div className="body-section" id="work_section">
            <div className="section section-container" data-aos="zoom-in-left" data-aos-anchor-placement="top-center">
              <div className="container">
                <header className="experience-section-header">
                  <p className="experience-eyebrow">{t("experienceSection.eyebrow")}</p>
                  <h2 className="experience-heading">{t("experienceSection.title")}</h2>
                  <p className="experience-supporting-text">{t("experienceSection.supportingText")}</p>
                </header>
                <WorkTabs works={t("workSection",{returnObjects: true})}/>
              </div>
            </div>
        </div>
    );
}

export default WorkSection;
