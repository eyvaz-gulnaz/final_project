const rengler = document.querySelector('.rengler'), 
items= document.querySelectorAll('.bestseller1') 
const colorItems = document.querySelectorAll('.color-item');

function rengDeyish() { 
    rengler.addEventListener('click', event => {
const selectedId = event.target.dataset.id
const target = event.target

switch(selectedId) {
case 'pink':
case 'green':
case 'mustard':
case 'blue':
case 'beige':
case 'white':
case 'qara':
case 'gold':
    getColor(selectedId);
    break
}
})
}
rengDeyish()

function getColor(className){
    items.forEach(chvet => {
        if(chvet.classList.contains(className)){
            chvet.style.display = "block"
        } else{
            chvet.style.display = "none"
        }
    })
}