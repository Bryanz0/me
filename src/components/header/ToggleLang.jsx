import { useContext, useState } from "react";
import {useTranslation} from "react-i18next";
import { ThemeContext } from "../../contexts/Theme.context";


function ToggleLang() {

    const {theme} = useContext(ThemeContext);
    
    const {i18n} = useTranslation("global");

    const [currLang, setCurrLang] = useState('ENG');

    const languages = ['ENG', 'SPA'];

    const changeLang = (lang) => {
        setCurrLang(lang);
        //localStorage.setItem('lang',lang);
    }

    // set visibility on click
    const [showLangOptions, setShowLangOptions] = useState(false);
    
    const showAndHideLangOptions = (flag) =>{
        setShowLangOptions(!flag);
    } 


    return (
        <div className="custom-select" id="custom-select">
            <div className={"select-trigger-"+theme} id="select-trigger" onClick={()=> showAndHideLangOptions(showLangOptions)}>
                <i className="fa-solid fa-earth-americas"></i>
                <span id="language"> {currLang} </span>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <ul className={"options-"+theme} id="optionsLanguage" style={{display: showLangOptions === true ? "block" : "none"}}>
                {
                    languages.map((lang) => (
                        <li key={lang} name="optionLang" onClick={() => {changeLang(lang); showAndHideLangOptions(showLangOptions); i18n.changeLanguage(lang);}} >{lang}</li>
                    ))
                }
            </ul>
        </div>

    );
}

export default ToggleLang;