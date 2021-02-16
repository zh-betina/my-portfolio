const navBtnClickHandler = (pagesToHide, pageToShow) =>{
    pagesToHide.forEach(el=>{
        el.classList.remove("showPage");
        el.classList.add("hidePage");
    });
    pageToShow.classList.remove("hidePage");
    pageToShow.classList.add("showPage");
}

export { navBtnClickHandler };