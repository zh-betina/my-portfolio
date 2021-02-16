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

    //show About Section
    aboutBtn.addEventListener("click", ()=>{
        navBtnClickHandler([header, projectsSection, contactSection], aboutSection);
    });

    //show Projects Section
    projectsBtn.addEventListener("click", ()=>{
        navBtnClickHandler([header, aboutSection, contactSection], projectsSection);
    });

    //show Contact Section
    contactBtn.addEventListener("click", ()=>{
        navBtnClickHandler([header, aboutSection, projectsSection], contactSection);
    })


}

main();