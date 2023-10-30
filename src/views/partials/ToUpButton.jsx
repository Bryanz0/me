import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.context";


function ToUpButton () {

    const {theme} = useContext(ThemeContext);

    const scrollToUp = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };

    return(
        <button id="toUpButton" className={"toUpButton-"+theme} onClick={scrollToUp}>
            <i className="fa-solid fa-circle-arrow-up" style={{scale: "1.5"}}></i>
        </button>
    );
}

export default ToUpButton;