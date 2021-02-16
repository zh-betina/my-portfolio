import { navBtnClickHandler } from "./helpers.js";
import starrySky from "./starrySky.js";



const main = () => {
    //btns
    const aboutBtn = document.getElementById("about");
    const projectsBtn = document.getElementById("projects");
    const contactBtn = document.getElementById("contact");

    //header + sections
    const header = document.querySelector(".header");
    const aboutSection = document.querySelector(".section__about-me");
    const projectsSection = document.querySelector(".section__projects");
    const contactSection = document.querySelector(".section__contact");

    starrySky(header);
    aboutBtn.addEventListener("click", ()=>{
        navBtnClickHandler([header, projectsSection, contactSection], null);
    })



}

main();