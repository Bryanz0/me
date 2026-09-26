import { useEffect } from 'react';


function Animations() {
    useEffect(() => {
        const toggleBtn = document.getElementById('toggle_btn');
        toggleBtn.onclick = () => {
            document.getElementById('dropdown_menu').classList.toggle('open');
        }
        // close hambuerger menu when user select one option
        const optionsMenu = document.getElementsByTagName('nav-links');
        for (let i = 0; i < optionsMenu.length; i++) {
            optionsMenu[i].addEventListener('click', () => {
                console.log("clicking option");
                document.getElementById('dropdown_menu').classList.toggle('open');
            })
        }

        window.onscroll = () => {
            if (document.body.scrollTo > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("toUpButton").style.display = "block";
            } else {
                document.getElementById("toUpButton").style.display = "none";
            }
        }
    }, []);

    return null;
}

export default Animations;
