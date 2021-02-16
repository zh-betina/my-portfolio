const navBtnClickHandler = (pagesToHide, pageToShow) =>{
    pagesToHide.forEach(el=>{
        el.classList.add("hidePage");
    });
}

export { navBtnClickHandler };