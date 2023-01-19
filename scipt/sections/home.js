function write_h1_text() {
    setTimeout(() => {
        let h1_animated_writing = document.getElementById("h1-animated-writing")
        let home_img = document.querySelector(".home__img")
        home_img.classList.add("active")
        let text = "Olá, eu sou"
        let animated_text = ""
        let index = 0
        const write_h1_letter = setInterval(() => {
            if (index != text.length) {
                animated_text = animated_text + text[index]
                h1_animated_writing.innerHTML = `${animated_text}|<br><span class="home__h1__span"></span>`
                index++
            } else {
                h1_animated_writing.innerHTML = `Olá, eu sou<br><span class="home__h1__span"></span>`
                write_span_text()
                clearInterval(write_h1_letter)
            }
        }, 200);
    }, 500);
}












function write_span_text() {
    let span_animated_writing = document.querySelector(".home__h1__span")
    let text = "João Vitor Santana"
    let animated_text = ""
    let index = 0
    let write_span_letter = setInterval(() => {
        if (index != text.length) {
            animated_text = animated_text + text[index]
            span_animated_writing.innerHTML = `${animated_text}|`
            index++
        } else {
            span_animated_writing.innerHTML = `${animated_text}`
            write_p_text()
            clearInterval(write_span_letter)
        }
    }, 200);
}





function write_p_text() {
    let home_p = document.querySelector(".home__p")
    let text = "Desenvolvedor Front-End"
    let animated_text = ""
    let index = 0
    let write_p_letter = setInterval(() => {
        if (index != text.length) {
            animated_text = animated_text + text[index]
            home_p.innerHTML = `${animated_text}|`
            index++
        } else {
            animated_cursor()
            clearInterval(write_p_letter)
        }
    }, 200);

    function animated_cursor() {
        setInterval(() => {
            if (home_p.innerHTML == `${animated_text}|`) {
                home_p.innerHTML = `${animated_text} `
            } else {
                home_p.innerHTML = `${animated_text}|`
            }
        }, 500);
    }
}





window.addEventListener("load", write_h1_text())