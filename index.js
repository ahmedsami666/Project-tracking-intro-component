var hamburger = document.getElementsByClassName("hamburger")[0]
var menu = document.getElementsByClassName("menu")[0]

var i = 0;
hamburger.addEventListener("click", function(){
    if (i % 2 === 0) {
        hamburger.src = "./images/icon-close.svg"
        menu.classList.add("clicked")
        i++
    } else{
        hamburger.src = "./images/icon-hamburger.svg"
        menu.classList.remove("clicked")
        i++
    }
})
