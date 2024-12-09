const listBg = [
    "./dist/img/banner1.png",
    "./dist/img/banner2.png",
    "./dist/img/banner3.png",
    "./dist/img/banner4.png",
    "./dist/img/banner5.png"
]


const banner = document.querySelector(".banner");

let currentIndex = 0;

banner.style.backgroundImage = `url("${listBg[currentIndex]}")`;


setInterval(() => {
    currentIndex = (currentIndex + 1) % listBg.length; // Xoay vòng chỉ mục
    banner.style.backgroundImage = `url(${listBg[currentIndex]})`;
}, 4000);



const link = document.querySelectorAll(".link");

link.forEach((item,) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        link.forEach((link) => {
            link.classList.remove("active");
        })
        item.classList.add("active");
    })
})


const colorBtn =[
    "#1A1A1D",
    "#0E46A3",
    "#865DFF"
]

let currentColor = 0;

const btn = document.querySelector(".button-1");

btn.style.backgroundColor = colorBtn[currentColor];

setInterval(() => {
    currentColor = (currentColor + 1) % colorBtn.length;
    btn.style.backgroundColor = colorBtn[currentColor];
}, 4000)

const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active-menu");
})