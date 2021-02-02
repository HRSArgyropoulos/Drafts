const menu = document.getElementById("side-menu").children;
console.log(menu);

menu[0].classList.add("active");

for (const li of menu) {
    li.addEventListener("click", () => {
        resetactive();
        li.classList.add("active");
    })
}

const resetactive = () => {
    for (const li of menu) {
        li.classList.remove("active");
    }
}
