console.log("work");
console.log("work");
console.log(window.location);
let hash = window.location.hash;
console.log(hash);

if (hash == "#ahmed") {
  window.location.href = "./recipe-page-main/recipe-page.html";
}
