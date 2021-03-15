"use strict";

const shortcuts = document.querySelectorAll("#shortcuts li");
console.log(shortcuts);

const taskbar = document.querySelector("#task-container li");
console.log(taskbar);

const wndw = document.querySelector(".window");
console.log(wndw);

for (const el of shortcuts) {
    el.addEventListener("dblclick", () => {
        taskbar.classList.add("active-task");
        wndw.classList.add("active-window");
    })
}

let close = document.querySelectorAll("#blue-bar-top i");
close = close[close.length-1];
close.addEventListener("click", () => {
    taskbar.classList.remove("active-task");
    wndw.classList.remove("active-window");
})

/* const close = document.getElementById("blue-bar-top").lastChild; */

