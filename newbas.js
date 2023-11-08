const basketIcon = document.querySelector('.basket-icon');
const sebet = document.querySelector('.sebet');
const basketChix = document.querySelector('.fa-greater-than');
const main = document.querySelector('main');
const products = document.querySelectorAll('.bestseller1');
const bestseller = document.querySelectorAll('.bestseller');
const alinacaqlar = document.querySelector('.basket-carts');
var basketCounter = document.querySelector('.basket-counter');

// sebet toggler
basketIcon.onclick = function () {
    sebet.style.right = "0";
    main.style.opacity = "0.7";
}
basketChix.onclick = function () {
    sebet.style.right = "-350px";
    main.style.opacity = "1";
}

// add and delete products
const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
var basketCounterChange = cartItems.length;

if (cartItems.length !== 0) {
    alinacaqlar.innerText = "";
}
    var cartItemAmount = document.createElement('span')
cartItemAmount.innerText = "1"
var cartItemAmountCounter = 1
updateProductCounter(cartItemAmountCounter)
updateCounter(basketCounterChange);

products.forEach(product => {
    var cartItemAmount = document.createElement('span')
    cartItemAmount.classList.add("cartItemAmount-${i}")
    var increaseBtn = document.createElement('i')
    increaseBtn.classList.add("fa-solid", "fa-plus")
    
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fa', 'fa-trash');

    const addToCartButton = product.querySelectorAll(".add-button");
    addToCartButton.forEach(addCart =>  {
        addCart.addEventListener("click", () => {
            if(cartItems.includes(product.innerHTML)){
                cartItemAmountCounter++
                basketCounterChange++;
                console.log("product uje v korzine")
                console.log(cartItemAmountCounter + "  " + basketCounterChange)
                updateProductCounter(cartItemAmountCounter) 
                updateCounter(basketCounterChange);
                updateCartInLocalStorage();
            } else{
        const productClone = product.cloneNode(true);
        productClone.classList.add('in-basket');
        productClone.appendChild(deleteButton);
        productClone.appendChild(increaseBtn)
        productClone.appendChild(cartItemAmount)
        alinacaqlar.appendChild(productClone);
        cartItems.push(product.innerHTML);
        }

        deleteButton.addEventListener("click", () => {
            alinacaqlar.removeChild(productClone);
            const index = cartItems.indexOf(product.innerHTML);
            if (index !== -1) {
                cartItems.splice(index, 1);
                basketCounterChange--;
                updateCounter(basketCounterChange);
                updateProductCounter(cartItemAmountCounter) 
                updateCartInLocalStorage();
            }
        });
    });
    updateCounter(basketCounterChange);
        updateProductCounter(cartItemAmountCounter) 
        updateCartInLocalStorage(); 
    })  
});

cartItems.forEach(cartItem => {
    var cartItemAmount = document.createElement('span')
    cartItemAmount.classList.add("cartItemAmount-${i}")
    cartItemAmount.innerText = "1"
    var productClone
    var increaseBtn = document.createElement('i')
    increaseBtn.classList.add("fa-solid", "fa-plus")

    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fa', 'fa-trash');

    if(productClone){
                cartItemAmountCounter++
                basketCounterChange++
                updateProductCounter(cartItemAmountCounter) 
                updateCounter(basketCounterChange);
                updateCartInLocalStorage();
    } else{
    productClone = document.createElement("div");
    productClone.innerHTML = cartItem;
    productClone.classList.add('in-basket');
    productClone.appendChild(deleteButton);
    productClone.appendChild(increaseBtn);
    productClone.appendChild(cartItemAmount)
    alinacaqlar.appendChild(productClone);
}

    deleteButton.addEventListener("click", () => {
        alinacaqlar.removeChild(productClone);
        const index = cartItems.indexOf(cartItem);
        if (index !== -1) {
            cartItems.splice(index, 1);
            basketCounterChange--;
            updateCounter(basketCounterChange);
            updateCartInLocalStorage();
        }
    });
        updateProductCounter(cartItemAmountCounter)
        updateCounter(basketCounterChange);
        updateCartInLocalStorage();
});

function updateCounter(value) {
    basketCounter.textContent = value.toString();
}
function updateProductCounter(productValue) {
    var cartItemAmount = document.createElement('span')
    cartItemAmount.classList.add("cartItemAmount-${i}")
    var cartItemAmount
    cartItemAmount.textContent = productValue.toString();
}

function updateCartInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
