var body = document.querySelector("body")
var darklight_btn = document.getElementById("darklight-btn")

darklight_btn.onclick = function () {
    if (body.classList.contains("light")) {
        darklight_btn.children[0].classList.remove("light")
        body.classList.remove("light")
    } else {
        darklight_btn.children[0].classList.add("light")
        body.classList.add("light")
    }
}