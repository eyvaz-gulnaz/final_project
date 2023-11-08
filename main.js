// const sekil= document.querySelector('.img-sale')
// const img = ["url(https://static.wixstatic.com/media/ea26fd_addcfc18fdac465b8391994a87de69cf~mv2.jpg/v1/fill/w_1903,h_944,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_addcfc18fdac465b8391994a87de69cf~mv2.jpg)", "url(https://static.wixstatic.com/media/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg/v1/fill/w_1903,h_944,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg)", "url(https://static.wixstatic.com/media/ea26fd_e64f9090f546456aa2dfbb7717f260d7~mv2.jpg/v1/fill/w_1903,h_944,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_e64f9090f546456aa2dfbb7717f260d7~mv2.jpg)"]

// var counter=0;

// setInterval(()=>{
//     if(counter==img.length){
//         counter=0
//     }
//     sekil.style.backgroundImage = img[counter]
//     counter++
// },2000)
    
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

