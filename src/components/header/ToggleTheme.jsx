import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme.context";
import {useTranslation} from "react-i18next"


function ToggleTheme() {

    const {t} = useTranslation("global");

    const {theme, setTheme} = useContext(ThemeContext);

    const currentTheme = theme;

    const [themeIcon, setThemeIcon] = useState(currentTheme);

    const handleThemeChange = () =>{
        setTheme(currentTheme === 'dark' ? 'light': 'dark');
        setThemeIcon(currentTheme === 'dark' ? 'light': 'dark');
        //set the theme in the local storage
        localStorage.setItem('theme',currentTheme === 'dark' ? 'light': 'dark');
    };

    return(
        <button className={"icn_toggle-"+theme} title={t("header.tooltip-info-mode")} onClick={handleThemeChange}>
            <i className={themeIcon === 'dark' ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </button>
    )
}

export default ToggleTheme;