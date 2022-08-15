const btn = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content");

window.addEventListener("load", () => {
    content.style.display = "none";
    btn.innerHTML = "Показать содержимое";
})

let textTransform = [
    {transform: "translateY(-16px)"},
    {transform: "translateY(0px)"}
];
let reversedTextTransform = [
    {transform: "translateY(px)"},
    {transform: "translateY(-16px)"}
];

let textTiming = {
    duration: 1000,
    iterations: 1
};
let textAnimate = content.animate(
    textTransform,
    textTiming
);

let reversedTextAnimate = content.animate(
    reversedTextTransform,
    textTiming
)

function addElementStyle() {
    btn.innerHTML = btn.classList.contains("active")? "Скрыть содержимое" : "Показать содержимое";
    btn.classList.contains("active")? textAnimate.play() : reversedTextAnimate.play();
    content.style.display = btn.classList.contains("active")? "block" : "none";
}
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    addElementStyle();
})