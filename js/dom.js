/* 1.выбор элемента на страницы */
/*1.1 выбор по id */
const h1 = document.getElementById("title");
console.log(h1);
/*1.2 выбор одного элемента по селектору  */
const menu = document.querySelector(".menu li:last-child");
console.log(menu);
/*1.3 выбор нескольких  */
const paragraphs = document.querySelectorAll("p")
console.log(paragraphs); 
