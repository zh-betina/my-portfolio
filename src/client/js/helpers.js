const navBtnClickHandler = (pagesToHide, pageToShow) =>{
    pagesToHide.forEach(el=>{
        if(el.className == "section__projects showPageFlex" || "section__projects showPageFlex showPage"){
            el.classList.remove("showPageFlex");
            el.classList.remove("showPage");
        }else{
            el.classList.remove("showPage");
        }
        el.classList.add("hidePage");
    });

    pageToShow.classList.remove("hidePage");
    if(pageToShow.className == "section__projects"){
        pageToShow.classList.add("showPageFlex")
    }else{
        pageToShow.classList.add("showPage");
    }
}

const mobileMenuAppear = (wrapper, links)=>{
    wrapper.classList.remove("menuClose");
    links.classList.remove("menuClose");
    wrapper.classList.add("animateMenuPageDisplay");
    links.classList.add("menuTxtDisplay");
}

const mobileMenuDisappear = (wrapper, links)=>{
    wrapper.classList.remove("animateMenuPageDisplay");
    links.classList.remove("menuTxtDisplay");
    wrapper.classList.add("menuClose");
    links.classList.add("menuClose");
}

const mobileMenuIconSwitch = (btnToHide, btnToShow)=>{
    btnToShow.classList.remove("scale0");
    btnToHide.classList.remove("scaleBack");
    btnToHide.classList.add("scale0");
    btnToShow.classList.add("scaleBack");
}

const mobileMenuIconSwitchClose = (btnToShow, btnToHide)=>{
    btnToShow.classList.add("scale0");
    btnToHide.classList.add("scaleBack");
    btnToHide.classList.remove("scale0");
    btnToShow.classList.remove("scaleBack");
}


export { navBtnClickHandler, mobileMenuAppear, mobileMenuIconSwitch, mobileMenuIconSwitchClose, mobileMenuDisappear };