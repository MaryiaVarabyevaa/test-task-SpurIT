const btn = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content");
const contentText = document.querySelector(".collapsible__content p");

window.addEventListener("load", () => {
    content.style.overflow = "hidden";
    content.style.height = 0;
    btn.innerHTML = "Показать содержимое";
});

 function outerHeight(element) {
    const height = element.offsetHeight;
    const style = window.getComputedStyle(element);

    return ["top", "bottom"]
        .map(side => parseInt(style[`margin-${side}`]))
        .reduce((total, side) => total + side, height)
}

function addElementStyle() {
    btn.innerHTML = btn.classList.contains("active")? "Скрыть содержимое" : "Показать содержимое";

    if(btn.classList.contains("active")) {
        const animationPointer = content.animate(
            { height: ["0", outerHeight(contentText) + "px"] },
            { easing: "ease-in-out", duration: 1000 }
        );
        animationPointer.onfinish = _ => { content.style.height = outerHeight(contentText) + "px" };
     } else {
        const animationPointer = content.animate(
            { height: [outerHeight(contentText) + "px", "0"] },
            { easing: "ease-in-out", duration: 1000 }
        );
        animationPointer.onfinish = _ => { content.style.height = 0 };
     }
}
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    addElementStyle();
})