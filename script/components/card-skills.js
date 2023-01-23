let card_skills = document.querySelectorAll(".card-skills")

card_skills.forEach((card_skills) =>
    card_skills.addEventListener('click', (event) => {
        card_skills.classList.toggle("show-details")
    })
);