"use strict";

const menu = document.querySelectorAll('.dest-menu li a');
const content = document.getElementsByClassName('menu-content');

//console.log(menu);
//console.log(content);

const hideall = () => {
    for (const el of content) { //Hide all content divs
        el.classList.remove("show");
        el.classList.add("hide");
    }
}

const resetactive = () => {
    for (const el of menu) { //Disable active from all li a
        el.classList.remove("active");
    }
}

//DEFAULT STATES
hideall(); //on load (first time) hide all
menu[0].classList.add("active"); //make info active (default)
content[0].classList.replace("hide","show"); /*show first content div*/

//TAB SELECT (CLICK)
for (const el of menu) {
    el.addEventListener("click", () => {
        hideall(); //hide all before selecting which one to show
        resetactive();
        switch (el.innerHTML) {
            case 'Info':
                content[0].classList.replace("hide","show");
                el.classList.add("active");
                break;
            case 'Schedule': 
                content[1].classList.replace("hide","show");
                el.classList.add("active");
                break;
            case 'Dates':
                content[2].classList.replace("hide","show");
                el.classList.add("active");
                break;
            case 'Price':
                content[3].classList.replace("hide","show");
                el.classList.add("active");
                break;
        }
    })
}