function menu () {
    const menu = document.querySelector(".header__menu");
    const menuBtn = document.querySelector(".menu-btn");
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const mainWrap = document.querySelector(".main-wrap");

    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    function open() {
        menu.classList.add("active");
        menuBtn.classList.add("active");
        // html.style.overflow = "hidden";
        // body.style.overflow = "hidden";
    }

    function close() {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
        // html.style.overflow = "visible";
        // body.style.overflow = "visible";
    }

    menuBtn.addEventListener("click", ()=>{
        if(hasClass(menu, "active")){
            close();
        } else {
            open();
        }
    })

    mainWrap.addEventListener("click", e =>{
        if(!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            close();
        }
    })
}

module.exports = menu;