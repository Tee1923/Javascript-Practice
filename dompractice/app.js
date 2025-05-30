/* console.log(document.getElementById(mainImg));
console.log(document.getElementById("mainImg"));

let imgObj = document.getElementById("mainImg");
console.log(imgObj);
console.dir(imgObj);
console.log(imgObj.src);
console.log(imgObj.id);
console.log(imgObj.tagName);

/// imgObj.src = "assets/creation_3.jpeg";
console.log(imgObj.src); ///
*/



/* 
let smallImgs = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImgs.length; i++) {
    console.dir(smallImgs[i]);
    console.dir(smallImgs[i].src);

    smallImgs[i].src = "assets/spiderman_img.png";
    console.log(`the value of image no. ${i} was changed`);
}
*/

/* 
console.log(document.getElementsByTagName("p"));
document.getElementsByTagName("p")[0].innerText = "abc"; 
*/

/* 
console.log(document.querySelector("h1"));
console.log(document.querySelector("#description"));
console.log(document.querySelector(".oldImg"));
console.log(document.querySelector("div li"));
console.log(document.querySelectorAll("div li"));
console.log(document.querySelector("div a"));
console.log(document.querySelectorAll("div a"));
*/


/* 
let para = document.querySelector("#description");
para.innerText = "abc";      
para.innerText = "Hi I am Peter Parker";   
para.innerText = "Hi I am <b>Peter Parker</b>";   
para.innerHTML = "Hi I am <b>Peter Parker</b>";  
let heading = document.querySelector("h1");
heading.innerHTML = "<u>SpiderMan</u>";
heading.innerHTML = `<b>${heading.innerHTML}</b>`;
*/


/* 
let img = document.querySelector("img");
img.setAttribute('id', 'spidermanImg');
img.setAttribute('src', 'assets/creation_3.jpeg');

img.getAttribute('class'); //initially, null
img.setAttribute('class', 'Images');
img.getAttribute('class'); //now, Images
*/


/* 
let heading = document.querySelector("h1");
console.log(heading.style);
heading.style.color = "purple";
heading.style.color = "green";
heading.style.backgroundColor = "yellow";


let links = document.querySelectorAll(".box .boxLink");
for(link of links) {
    link.style.color = "purple";
}

*/


/* 
let heading = document.querySelector("h1");
console.log(heading.classList);  // null
heading.classList.add("abc");
console.log(heading.classList);  //abc

heading.classList.add("green");
console.log(heading.classList);

heading.classList.contains("abc");
console.log(heading.classList);

heading.classList.remove("green");
console.log(heading.classList);

heading.classList.toggle("green");
heading.classList.toggle("abc");
heading.classList.toggle("green");
*/


/* 
let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);

let box = document.querySelector('.box');
console.log(box.children);
console.log(box.childElementCount);

let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

let img = document.querySelector("img");
console.log(img.previousElementSibling);
console.log(img.previousElementSibling.style);
img.previousElementSibling.style.color = "green"; 
*/




/* 
console.log(document.createElement('p'));

let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hi I am a new p";
console.dir(newP);

let body = document.querySelector("body");
body.appendChild(newP);

console.log(newP);
newP.append("this is a new text");


let btn = document.createElement('button');
btn.innerText = "Click me!";
newP.append(btn);
newP.append("do not click this button");

let box = document.querySelector('.box');
box.prepend(newP);

let p = document.querySelector("#description");
let btn2 = document.createElement('button');
btn2.innerText = "new button!!";
p.insertAdjacentElement('beforebegin', btn2);
p.insertAdjacentElement('afterbegin', btn2);
p.insertAdjacentElement('beforeend', btn2);
p.insertAdjacentElement('afterend', btn2);


body.removeChild(btn);
p.insertAdjacentElement('afterend', btn2);
btn2.remove();
p.remove();

 */

