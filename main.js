let links = document.querySelector(".links");
let ul = document.getElementById("ul");

links.addEventListener("click",change);

function change() {
if(ul.style.display === "none") {
ul.style.display = "block";
} else {
ul.style.display = "none";
}
}