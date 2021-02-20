const navBtnClickHandler = (pagesToHide, pageToShow) =>{
    pagesToHide.forEach(el=>{
        el.classList.remove("showPage");
        el.classList.add("hidePage");
    });
    pageToShow.classList.remove("hidePage");
    pageToShow.classList.add("showPage");
}

const mobileMenuAppear = (wrapper, links)=>{
    wrapper.classList.add("animateMenuPageDisplay");
    links.classList.add("menuTxtDisplay");
}

const mobileMenuIconSwitch = (btnToHide, btnToShow)=>{
    btnToShow.classList.remove("scale0");
    btnToHide.classList.remove("scaleBack");
    btnToHide.classList.add("scale0");
    btnToShow.classList.add("scaleBack");
}

const mobileMenuIconSwitchClose = (btnToShow, btnToHide)=>{
    btnToShow.classList.remove("scale0");
    btnToHide.classList.remove("scaleBack");
    btnToHide.classList.add("scale0");
    btnToShow.classList.add("scaleBack");
}


export { navBtnClickHandler, mobileMenuAppear, mobileMenuIconSwitch };