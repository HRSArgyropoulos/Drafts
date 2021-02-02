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

for (const el of menu) {
    const li = el.parentElement //get specific li from li a
    const index = Array.from(li.parentElement.children).indexOf(li); //make an array from lis of ul and then find the index of the specific li from above
    //console.log(index);
  
    el.addEventListener("click", () => {
      hideall(); //hide all before selecting which one to show
      resetactive();
      content[index].classList.replace("hide", "show");
      el.classList.add("active");
    });
}