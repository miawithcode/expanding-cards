const panels = document.querySelectorAll(".panel");
const header = document.querySelector(".header");

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActiveClass();
        panel.classList.add("active");
        changeColor(panel);
    })
})

function removeActiveClass(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}

function changeColor(panel){
    let panelStyle = getComputedStyle(panel);
    let BgColor = panelStyle.backgroundColor;
    header.style.backgroundColor = BgColor;
}