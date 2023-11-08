const del = document.querySelector(".fa-xmark")
const lupa =document.querySelector(".fa-magnifying-glass")
const search =document.querySelector("#search")
const lupali =document.querySelector(".lupali")

lupa.onclick = function(){
del.style.display = "block"
search.style.display = "block"
lupali.style.borderBottom = "1px solid rgb(80, 79, 79)"
lupa.style.marginLeft = "0"
}
del.onclick = function(){
del.style.display = "none"
search.style.display = "none"
lupali.style.borderBottom = "none"
lupa.style.marginLeft = "auto"
}

const searchInput = document.getElementById("search");
const posts = document.querySelectorAll(".post");

const allPosts = document.querySelector('.all-posts p')
allPosts.onclick = function () {
    posts.forEach((post) => {
        post.style.display = "block";
    });
};

searchInput.addEventListener("input", function () {
const searchTerm = searchInput.value.trim().toLowerCase();
posts.forEach((post) => {
    const question = post.querySelector(".down p").textContent.toLowerCase();
    if (question.includes(searchTerm)) {
        post.style.display = "block";
    } else {
        post.style.display = "none"; 
    }
});
});

