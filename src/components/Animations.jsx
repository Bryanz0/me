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
        };

        window.onload = function (){

        //GSAP
        gsap.from(".skill-bar", {
            scrollTrigger: "#skill_column1",
            width: 0,
            duration: 5
        });
        }

        // copy text button interactions
        let copy_btns = document.getElementsByName('copyText');
        for (let i = 0; i < copy_btns.length; i++) {
            copy_btns[i].addEventListener('click', () => {
                let text = copy_btns[i].previousElementSibling.children[1].innerHTML;
                const tempTextarea = document.createElement('textarea');
                tempTextarea.value = text;
                document.body.appendChild(tempTextarea);
                tempTextarea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextarea);

                copy_btns[i].children[0].innerHTML = '<i class="fa-solid fa-clipboard-check"></i> Copied!';

                setTimeout(() => {
                    copy_btns[i].children[0].innerHTML = '<i class="fa-regular fa-clipboard"></i> Copy';
                }, 1500);
            });
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
