var btns = document.querySelectorAll(".menu__nav__a")
var body = document.querySelector("body")
var menutoggle_btn = document.getElementById("menutoggle-btn")
var section_menu = document.getElementById("section-menu")
var header = document.querySelector(".main__header")
var scroll_to_home = document.getElementById("scroll-to-home")

btns.forEach((btn) =>
    btn.addEventListener('click', (event) => {
        menutoggle_btn.classList.remove("active")
        section_menu.classList.remove("active")
        setTimeout(() => {
            header.style.position = "fixed"
            body.style.overflow = "auto"
            section_menu.style.display = "none"
        }, 500);
    })
);

scroll_to_home.onclick = function () {
    menutoggle_btn.classList.remove("active")
    section_menu.classList.remove("active")
    setTimeout(() => {
        header.style.position = "fixed"
        body.style.overflow = "auto"
        section_menu.style.display = "none"
        window.scroll(0, 0)
    }, 500);
}