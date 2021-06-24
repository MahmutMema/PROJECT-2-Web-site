let menuBtn=document.querySelector("#menu-bar")
let mobileMenu=document.querySelector("#mobile-menu")
let closeBtn=document.querySelector("#close")

menuBtn.addEventListener("click",function(){
    mobileMenu.style.display="block"
})
closeBtn.addEventListener("click",function(){
    mobileMenu.style.display="none" 
})