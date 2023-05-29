function showHeader(el){
    const componentEl = document.createElement("header")

    componentEl.innerHTML = `
    <div class="header_container">
        <a href="./index.html">
            <img src="./images/logo.png" class="header-image">
        </a>
        <button class="header_menu-mobile-button-open">
            <div class="menu_on">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <div class="header_menu-mobile-window">
            <button class="header_menu-mobile-button-close">
                <img src="./images/header-cruz-menu.png" class="header_menu-mobile-button-close-image">
            </button>
            <div class="header_menu-mobile-window-links">
                <a class="header_menu-mobile-window-a" href="./portfolio.html">Portfolio</a>
                <a class="header_menu-mobile-window-a" href="./servicios.html">Servicios</a>
                <a class="header_menu-mobile-window-a" href="./contacto.html">Contacto</a>
            </div>
        </div>
        <div class="header_menu-desktop">
            <a class="header_menu-desktop-text" href="./portfolio.html">Portfolio</a>
            <a class="header_menu-desktop-text" href="./servicios.html">Servicios</a>
            <a class="header_menu-desktop-text" href="./contacto.html">Contacto</a>
        </div>
    </div>`

    el.appendChild(componentEl);

    (function setMenuHamburguesa(){
        const openButtonEl = componentEl.querySelector(".header_menu-mobile-button-open");
        const closeButtonEl = componentEl.querySelector(".header_menu-mobile-button-close");
        const windowEl = componentEl.querySelector(".header_menu-mobile-window");

        openButtonEl.addEventListener("click", ()=>{
            windowEl.style.display = "inherit";
        })

        closeButtonEl.addEventListener("click", ()=>{
            windowEl.style.display = "";
        })
    })();
};
