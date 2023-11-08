const list = document.querySelector('.list'), 
items= document.querySelectorAll('.bestseller1') 
listItems = document.querySelectorAll('.list_item')
filterResp = document.querySelector('.filter-resp')
filterYekeScreen = document.querySelector('.filter')
filterX = document.querySelector('.filter-x')
// Filter responsive
filterResp.onclick = function(){
    this.style.display = "none"
    filterYekeScreen.style.display = "block" 
}
filterX.onclick = function(){
    filterYekeScreen.style.display = "none" 
    filterResp.style.display = "flex"
}

// Category Filter
function filter() { 
    list.addEventListener('click', event => {
const targetId = event.target.dataset.id
const target = event.target

if(target.classList.contains('list_item')) { 
    listItems.forEach (listItem => listItem.classList.remove('active'))
    target.classList.add('active')
}
switch(targetId) {
case 'all': 
    getItems('bestseller1');
    break;
case 'lighting':
case 'furniture':
case 'salee':
case 'rug':
case 'bestsellerr':
case 'new':
    getItems(targetId);
    break
}
})
}
filter()
function getItems(className){
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = "block"
        } else{
            item.style.display = "none"
        }
    })
}

// Reng Filter
const rengler = document.querySelector('.rengler')
const colorItems = document.querySelectorAll('.color-item');

function rengDeyish() { 
    rengler.addEventListener('click', event => {
const selectedId = event.target.dataset.id

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

// price filter

var minSlider = document.getElementById('min');
var maxSlider = document.getElementById('max');
var outputMin = document.getElementById('min-value');
var outputMax = document.getElementById('max-value');
var qiymet = document.querySelectorAll('#price')
outputMin.innerHTML = minSlider.value;
outputMax.innerHTML = maxSlider.value;

minSlider.oninput = function(){
    outputMin.innerHTML=this.value;
    filterPrices();
}
maxSlider.oninput = function(){
    outputMax.innerHTML=this.value;
    filterPrices();
}

function filterPrices() {
            var min = parseInt(minSlider.value);
            var max = parseInt(maxSlider.value);

            items.forEach(function(deyer) {
                var price = parseInt(deyer.getAttribute('data-price'));

                if (price >= min && price <= max) {
                    deyer.style.display = "block";
                } else {
                    deyer.style.display = "none";
                }
            });
        }
        filterPrices();


// Plus Minus Togglers

const colorGoster = document.querySelector('.plus-color')
const priceGoster = document.querySelector('.plus-price')
const minus = document.querySelector('.minus')
const chena = document.querySelector(".chooce-price")
var toggle = false
colorGoster.onclick = function(){
    if(toggle===false){
        rengler.style.display = "grid"
    this.innerHTML = '<i class="fa-solid fa-minus"></i>'
    toggle = true
    } else{
        rengler.style.display = "none"
        this.innerHTML = '<i class="fa-solid fa-plus"></i>'
        toggle=false
    }
}
priceGoster.onclick = function(){
    if(toggle===false){
        chena.style.display = "block"
    this.innerHTML = '<i class="fa-solid fa-minus"></i>'
    toggle = true
    } else{
        chena.style.display = "none"
        this.innerHTML = '<i class="fa-solid fa-plus"></i>'
        toggle=false
    }
}
minus.onclick = function(){
    if(toggle===false){
        list.style.display = "none"
    this.innerHTML = '<i class="fa-solid fa-plus"></i>'
    toggle = true
    } else{
        list.style.display = "flex"
        this.innerHTML = '<i class="fa-solid fa-minus"></i>'
        toggle=false
    }
}        