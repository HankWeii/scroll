let mouseImg = document.querySelector(".mouse");
let producttitle = document.querySelector(".producttitle");
let searchicon = document.querySelector(".search");
let searchitem = document.querySelector(".search_text");
let searchinput = document.querySelector(".search_button");
let slogan1 = document.querySelector(".slogan1");
let slogan2 = document.querySelector(".slogan2");
let slogan3 = document.querySelector(".slogan3");

let navtext1 = document.querySelector(".navtext1");
let navtext1list = document.querySelector(".nav1list1");


navtext1.addEventListener("mouseover", function() {
  listappear(navtext1list);
},false);

navtext1.addEventListener("mouseout", function() {
  listhide(navtext1list);
},false);

searchicon.addEventListener("click", function() {
  searchide(searchitem);
  searchide(searchinput);
},false);

function listhide(list) {
  list.style.display = "none";
}

function listappear(list) {
  list.style.display = "block";
}

function searchide(x){
  if(x.style.opacity == 0) {
    x.style.opacity = 1;
    x.style.display = "block";
  } else {
    x.style.opacity = 0;
    x.style.display = "none";
  }
}

function mousemove() {
    let moveToNextAt = (mouseImg.offsetTop) + ((mouseImg.clientHeight)/3)*2;
    if(window.scrollY > moveToNextAt) {
        mouseImg.classList.add("move");
        producttitle.classList.add("producttitlemove");
        slogan1.classList.add("slogan1move");
        slogan2.classList.add("slogan2move");
        slogan3.classList.add("slogan3move");
    } else {
        mouseImg.classList.remove("move");
        producttitle.classList.remove("producttitlemove");
        slogan1.classList.remove("slogan1move");
        slogan2.classList.remove("slogan2move");
        slogan3.classList.remove("slogan3move");
    }
}

function debounce(func, delay) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(context, args)
      }, delay);
    }
  }

window.addEventListener("scroll", debounce(mousemove,50));



