var i = 0;
// var A = 0;
var tag = document.getElementById("header-animate");
var html = document.getElementById("header-animate").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("header-animate").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

const backToTop = document.querySelector(".toTop")
const header = document.getElementById("header-container") 
// console.log(header.clientHeight)
const navbar = document.querySelector(".navbar")
// console.log(navbar.clientHeight)

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>350){
        backToTop.classList.add("active") 
    }
    else{
        backToTop.classList.remove("active")
    }
})



