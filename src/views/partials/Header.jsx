import {useTranslation} from "react-i18next"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.context";
import ToggleLang from "../../components/header/ToggleLang";
import ToggleTheme from "../../components/header/ToggleTheme";


function Header() {

    const {theme} = useContext(ThemeContext);

    const {t} = useTranslation("global");

    const scrollToSection = (sectionId) =>{
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});
    }

    return(
        <header>
            <div className={"navb-"+theme}>
                <div><a href="#" className="logo">
                    <img className={"logo-"+theme} alt="Logo_BZ_UX_Developer" />
                    </a></div>
                <ul className="links">
                    <li><a className={"nav-links-"+theme} name="nav-links" onClick={()=>scrollToSection('home_section')}>{t("header.nav-bar.nav-link-1")}</a></li>
                    <li><a className={"nav-links-"+theme} name="nav-links" onClick={()=>scrollToSection('work_section')}>{t("header.nav-bar.nav-link-2")}</a></li>
                    <li><a className={"nav-links-"+theme} name="nav-links" onClick={()=>scrollToSection('skills_section')}>{t("header.nav-bar.nav-link-3")}</a></li>
                    <li><a className={"nav-links-"+theme} name="nav-links" onClick={()=>scrollToSection('projects_section')}>{t("header.nav-bar.nav-link-4")}</a></li>
                    <li><a className={"nav-links-"+theme} name="nav-links" onClick={()=>scrollToSection('contact_section')}>{t("header.nav-bar.nav-link-5")}</a></li>
                </ul>
                <div className="toggle_buttons">
                    <ToggleLang />
                    <ToggleTheme />
                </div>

                <a className={"action_btn-"+theme} onClick={()=>handleCVButtonClick()} href="documents/CV_Bryan_Zambrano.pdf" target="_blank" download>
                    <i className="fa-regular fa-circle-down"></i> {t("header.download-button") }</a>
                <div className={"toggle_btn-"+theme} id="toggle_btn">
                    <i className="fa-solid fa-bars"></i>
                </div>

                {/*Dropdown menu for mobile devices */}
                <div className={"dropdown_menu-"+theme} id="dropdown_menu">
                    <li><a className={"a-"+theme} onClick={()=>scrollToSection('home_section')}>{t("header.nav-bar.nav-link-1")}</a></li>
                    <li><a className={"a-"+theme} onClick={()=>scrollToSection('work_section')}>{t("header.nav-bar.nav-link-2")}</a></li>
                    <li><a className={"a-"+theme} onClick={()=>scrollToSection('skills_section')}>{t("header.nav-bar.nav-link-3")}</a></li>
                    <li><a className={"a-"+theme} onClick={()=>scrollToSection('projects_section')}>{t("header.nav-bar.nav-link-4")}</a></li>
                    <li><a className={"a-"+theme} onClick={()=>scrollToSection('contact_section')}>{t("header.nav-bar.nav-link-5")}</a></li>
                    <li><a className={"action_btn-"+theme} onClick={()=>handleCVButtonClick()} href="documents/CV_Bryan_Zambrano.pdf" target="_blank" download><i className="fa-regular fa-circle-down"></i> {t("header.download-button")}</a></li>
                </div>
            </div>
        </header>
    )
}

export default Header;