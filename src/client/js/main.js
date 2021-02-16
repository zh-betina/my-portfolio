import { navBtnClickHandler } from "./helpers.js";



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

    aboutBtn.addEventListener("click", ()=>{
        navBtnClickHandler([header, projectsSection, contactSection], null);
    })



}

main();