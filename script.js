document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        const progress = skill.querySelector(".skill-progress");
        const value = skill.getAttribute("data-skill");

        progress.style.width = `${value}%`;
    });
});
document.getElementById("en-btn").addEventListener("click", function () {
    if (document.body.classList.contains('pl-version')) {
        window.location.href = "home-en.html";
    } else {
        window.location.href = "about-en.html";
    }
});

document.getElementById("pl-btn").addEventListener("click", function () {
    if (document.body.classList.contains('en-version')) {
        window.location.href = "home.html";
    } else {
        window.location.href = "about.html";
    }
});

