import {useTranslation} from "react-i18next";
import WorkTabs from "../components/WorkSection/WorkTabs";
import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme.context";


function WorkSection (){
    
  const {theme} = useContext(ThemeContext);

    const {t} = useTranslation("global");

    return (
        <div className="body-section" id="work_section">
            <div className="section" data-aos="zoom-in-left" data-aos-anchor-placement="top-center">
              <div className="container">
                <div className="columns section-div">
                  <div className="column is-one-quarter is-4">
                    <h2 className={"tittle-section text-color-"+theme}>{t("experiencieTitle")}</h2>
                  </div>
                  <div className="column auto">
                    <hr className={"section-line-"+theme} />
                  </div>
                </div>
                <WorkTabs works={t("workSection",{returnObjects: true})}/>
              </div>
            </div>
        </div>
    );
}

export default WorkSection;