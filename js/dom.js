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
/*2 прочитать или изминить содержимое тега  */
console.log(h1.textContent);
console.log(h1.outerText)
console.log(h1.innerHTML);
console.log(h1.outerHTML);

h1.textContent='новый заголовок <i class="bi bi-shield"></i>' ;
h1.innerHTML='новый заголовок <i class="bi bi-shield"></i>' ;

/* 3- рвбота со силями (атрибут style) */
h1.style.color="red";
h1.style.fontSize="48px"
console.log(h1.style)

/* 4- работа с классами (атрибут class) */
menu.classList.add("border");
const h2 = document.querySelector(".blue");
h2.classList.remove("blue")
console.log(menu.classList.contains("border"));/*проверить если такой класс*/
/* 5- работа с атрибутами  */
const firstLink = document.querySelector(".menu li:first-child a");
console.log(firstLink.getAttribute("href"));//узнать значение атрибута 
firstLink.setAttribute("href","https://midis.ru/")//установить атрибут 
firstLink.setAttribute("target","_blank")
/* 6- сщздание нового тега  */
const image = document.createElement("img");
image.setAttribute("src","img/smailiki-zheltye-shary-ulybki.webp");
image.classList.add("border");
const block = document.getElementById("block");
block.classList.add("border");
block.append(image);
/* 7- работа с предками  */
console.log(firstLink.closest("nav"));
/*8- работа с потомками  */
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"));
/*9 события  */
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");
btn.addEventListener("click",function(){
    circle.style.background = "blue";
})
