import {useTranslation} from "react-i18next";

function Footer () {

  const {t} = useTranslation("global");

    return(
        <footer className="my_footer">
          <div className="content has-text-centered">
            <p>{t("footerSection.info1")} <br/><a href="https://react.dev/">React</a>, <a href="https://bulma.io/">Bulma </a> 
            {t("footerSection.info2")}</p>
            {/*<p>{t("footerSection.info3")} <a href="https://github.com/Bryanz0/react-portfolio">repo</a> :D</p>*/}
            <p style={{fontSize: "small"}}>&copy; <em>Bryan Zambrano</em> 2023 </p>
          </div>
        </footer>
    );
}

export default Footer;