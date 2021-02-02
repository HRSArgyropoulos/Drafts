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

//DEFAULT STATE
hideall(); //on load (first time) hide all
menu[0].classList.add("active"); //make info active (default)
content[0].classList.replace("hide","show"); /*show first content div*/

const arr = [...document.querySelector(".dest-menu").children]; //get lis from childen of the ul and put them in a array
//console.log(arr);

for (const el of menu) {
    const li = el.parentElement; //get li from parent of the specific li a
    const index = arr.indexOf(li); //index of specific li in the array of lis
    //console.log(index);
  
    el.addEventListener("click", () => {
      hideall(); //hide all before selecting which one to show
      resetactive();
      content[index].classList.replace("hide", "show");
      el.classList.add("active");
    });
}