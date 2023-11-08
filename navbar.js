var nav = document.querySelector('nav')
var menubtn = document.querySelector('.burger-menu')
var ul = document.querySelector('.burger')
var menuclick = false
menubtn.onclick = function(){
    if( menuclick===false){
        nav.style.display = "block"
        nav.style.zIndex = "3"
    ul.style.flexDirection = "column"
    menuclick = true
    } else{
        nav.style.display = "none"
        menuclick= false
    }
}