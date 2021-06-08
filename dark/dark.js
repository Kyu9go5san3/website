var primary = document.getElementsByClassName("primary"),
secondary = document.getElementsByClassName("secondary"),
modeButton = document.getElementById("modeButton");


function toggleMode() {
    for (let i = 0; i < primary.length; i++) {
        primary[i].classList.toggle("dark");
        primary[i].classList.toggle("light");
    }
    for (let i = 0; i < secondary.length; i++) {
        secondary[i].classList.toggle("dark");
        secondary[i].classList.toggle("light");
    }
    modeButton.classList.toggle("fa-moon");
    modeButton.classList.toggle("fa-sun");
}