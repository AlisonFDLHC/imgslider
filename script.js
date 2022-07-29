//Slider de fotos

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const imgs = document.querySelectorAll(".img")
const body = document.querySelector("body")
let imgAtual = 0

previous.addEventListener("click", () => { changeImg("previousImg") });
next.addEventListener("click", () => { changeImg("nextImg") });

function changeImg(opcao) {
    switch (opcao) {
        case "previousImg":
            imgs.forEach(function(s) {s.classList.remove("active")})
            if (imgAtual > 0) {
                imgAtual -= 1
            } else {
                imgAtual = imgs.length - 1
            }
            imgs[imgAtual].classList.add("active")
        break;
        case "nextImg":
            imgs.forEach(function(s) {s.classList.remove("active")})
            if (imgAtual < imgs.length - 1) {
                imgAtual += 1
            } else {
                imgAtual = 0
            }
            imgs[imgAtual].classList.add("active")
            console.log("avancar")
        break;
    }
}

//Alternador de tema

const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");
const cssroot = document.querySelector(':root');

lightMode.addEventListener("click", () => { changeTheme("light") });
darkMode.addEventListener("click", () => { changeTheme("dark") });

function changeTheme(opcao) {
    switch (opcao) {
        case "light":
            darkMode.classList.remove("theme-button-active")
            lightMode.classList.add("theme-button-active")
            cssroot.style.setProperty('--bg-color','var(--bg-color-light)')
            cssroot.style.setProperty('--main-button-color', 'var(--main-button-color-light)')
            cssroot.style.setProperty('--title', 'var(--title-light)')
            cssroot.style.setProperty('--button-hover', 'var(--button-hover-light)')
        break;
        case "dark":
            lightMode.classList.remove("theme-button-active")
            darkMode.classList.add("theme-button-active")
            cssroot.style.setProperty('--bg-color','var(--bg-color-dark)')
            cssroot.style.setProperty('--main-button-color', 'var(--main-button-color-dark)')
            cssroot.style.setProperty('--title', 'var(--title-dark)')
            cssroot.style.setProperty('--button-hover', 'var(--button-hover-dark)')
        break;
    }
}