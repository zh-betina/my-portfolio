import { navBtnClickHandler, mobileMenuAppear, mobileMenuIconSwitch, mobileMenuIconSwitchClose, mobileMenuDisappear } from "./helpers.js";

const main = () => {
    //btns
    const aboutBtn = document.querySelectorAll(".about");
    const projectsBtn = document.querySelectorAll(".projects");
    const contactBtn = document.querySelectorAll(".contact");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenuCloseBtn = document.getElementById("mobileMenuCloseBtn");
    const mobileAboutBtn = document.getElementById("aboutMob");
    const mobileProjectsBtn = document.getElementById("projectsMob");
    const mobileContactBtn = document.getElementById("contactMob");

    //header + sections
    const header = document.querySelector(".header");
    const aboutSection = document.querySelector(".section__about-me");
    const projectsSection = document.querySelector(".section__projects");
    const contactSection = document.querySelector(".section__contact");

    //mobile menu
    const menuPage = document.querySelector(".nav__mobile");
    const menuPageList = document.querySelector(".nav__mobile-list");

    //mobile navigation btns
    mobileAboutBtn.addEventListener("click", ()=>{
        mobileMenuIconSwitchClose(mobileMenuCloseBtn, mobileMenuBtn);
        mobileMenuDisappear(menuPage, menuPageList);
    });

    mobileProjectsBtn.addEventListener("click", ()=>{
        mobileMenuIconSwitchClose(mobileMenuCloseBtn, mobileMenuBtn);
        mobileMenuDisappear(menuPage, menuPageList);
    });

    mobileContactBtn.addEventListener("click", ()=>{
        mobileMenuIconSwitchClose(mobileMenuCloseBtn, mobileMenuBtn);
        mobileMenuDisappear(menuPage, menuPageList);
    });

    //show About Section
    aboutBtn.forEach(el=>{
        el.addEventListener("click", ()=>{
            navBtnClickHandler([header, projectsSection, contactSection], aboutSection);
        });
    });

    //show Projects Section
    projectsBtn.forEach(el=>{
        el.addEventListener("click", ()=>{
            navBtnClickHandler([header, aboutSection, contactSection], projectsSection);
        });
    });

    //show Contact Section
    contactBtn.forEach(el=>{
        el.addEventListener("click", ()=>{
            navBtnClickHandler([header, aboutSection, projectsSection], contactSection);
        });
    });

    //show mobile menu
    mobileMenuBtn.addEventListener("click", ()=>{
        mobileMenuIconSwitch(mobileMenuBtn, mobileMenuCloseBtn);
        mobileMenuAppear(menuPage, menuPageList);
    });

    //mobile menu icon close
    mobileMenuCloseBtn.addEventListener("click", ()=>{
        mobileMenuIconSwitchClose(mobileMenuCloseBtn, mobileMenuBtn);
        mobileMenuDisappear(menuPage, menuPageList);
    });
}

main();