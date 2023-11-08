general = document.querySelector('.general-inside')
settings = document.querySelector('.settings-inside')
gen = document.querySelector('.gen')
set = document.querySelector('.set')

gen.onclick = function(){
    settings.style.display = "none"
    general.style.display = "block"
}
set.onclick = function(){
    settings.style.display = "block"
    general.style.display = "none"
}

// toggler up down 
angleDown = document.querySelectorAll('.fa-angle-down');
hidden = document.querySelectorAll('.hidden');
var toggler = false;

angleDown.forEach((downer, index) => {
    downer.onclick = function() {
        if (toggler === false) {
            hidden[index].style.display = "block";
            this.classList.remove('fa-angle-down');
            this.classList.add('fa-angle-up');
            toggler = true;
        } else {
            hidden[index].style.display = "none";
            this.classList.remove('fa-angle-up');
            this.classList.add('fa-angle-down');
            toggler = false;
        }
    }
});

const basliq = document.querySelector('#basliq')
const del = document.querySelector(".fa-xmark")
const lupa =document.querySelector(".fa-magnifying-glass")
const search =document.querySelector("#search")
const lupali =document.querySelector(".lupali")

lupa.onclick = function(){
basliq.style.display = "none"
del.style.display = "block"
search.style.display = "block"
lupa.style.marginLeft = "0"
lupali.style.width = "100%"
search.style.width = "90%"
lupali.style.border = "2px solid lightblue"
}
del.onclick = function(){
basliq.style.display = "block"
del.style.display = "none"
search.style.display = "none"
lupa.style.marginLeft = "auto"
lupali.style.width = "6%"
lupali.style.border = "none"
}

const searchInput = document.getElementById("search");
const faqQuestions = document.querySelectorAll(".faq-questions");

searchInput.addEventListener("input", function () {
const searchTerm = searchInput.value.trim().toLowerCase();
settings.style.display = "block"
faqQuestions.forEach((faq) => {
    const question = faq.querySelector("h4").textContent.toLowerCase();
    const answer = faq.querySelector(".hidden").textContent.toLowerCase();
    if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        faq.style.display = "block";
    } else {
        faq.style.display = "none"; 
    }
});
});







