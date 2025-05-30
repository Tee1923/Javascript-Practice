/* 
let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function () {
    alert("button was clicked");
}

function sayHello() {
    alert("Hello!");
}
btn.onclick = sayHello;

//for more than one buttons doing the same task
let btns = document.querySelectorAll("button");
for(btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("You entered a button");
    }
    console.dir(btn);
}
*/



/* 
function sayHello() {
    alert("Hello!");
}
// function sayHi() {
    alert("Hi!");
} //
function sayNamaste() {
    alert("Namaste!");
}

let btns = document.querySelectorAll("button");
for(btn of btns) {
    btn.addEventListener("click", sayHello);
    //btn.addEventListener("click", sayHi); 
    btn.addEventListener("click", function() {
        alert("Hi!");
    }); 
    btn.addEventListener("dblclick", sayNamaste);
    btn.onmouseenter = function () {
        console.log("You entered a button");
    }
    console.dir(btn);
} 
*/

//generate random colours
/* 
let btn = document.querySelector("#colourgeneration");
let heading = document.querySelector("h1");
let box = document.querySelector("div");

btn.addEventListener("click", function() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    //let random = getRandomColor()

    heading.innerText = `rgb(${red}, ${green}, ${blue})`; //random
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; //random

    console.log("colour updated")
})

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
} 
*/



/* 
let p = document.querySelector("p");
p.addEventListener("click", function() {
    console.log("Para was clicked");
});

let box = document.querySelector("div");
box.addEventListener("mouseenter", function() {
    console.log("Mouse inside div");
});

let btn = document.querySelector("#newbutton");
btn.addEventListener("click", function() {
    console.log(this);
    console.dir(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
})
*/


/* let p = document.querySelector("p");
let box = document.querySelector("div");
let btn = document.querySelector("#newbutton");


p.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

box.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

btn.addEventListener("click", function() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
})

-----OR------
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

p.addEventListener("click",changeColor);
box.addEventListener("click",changeColor);
btn.addEventListener("click",changeColor);
 */



/* 
let btn = document.querySelector("#newbutton");
btn.addEventListener("click", function(event) {
    console.log(event);  //pointer event
    console.log("button clicked");
});
btn.addEventListener("dblclick", function(event) {
    console.log(event);  //mouse event
    console.log("button clicked twice");
});
*/



/* 
let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    console.log(event);
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("a key was pressed")
});

inp.addEventListener("keyup", function(event) {
    console.log(event);
    console.log("a key was released")
}); 
*/

/* 
let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event) {
    console.log("code = ", event.code);
    if( event.code == "KeyU") {
        console.log("character moves up");
    } else if( event.code == "KeyD") {
        console.log("character moves down");
    } else if( event.code == "KeyL") {
        console.log("character moves left");
    } else if( event.code == "KeyR") {
        console.log("character moves right");
    } else {
        console.log("wrong move");
    }
});
*/



/* 
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("form submitted");

    let inp = document.querySelector("#forminp");
    console.dir(inp);
    console.log(inp.value);
}); 
*/


/* 
let form2 = document.querySelector(".form2");
form2.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("form submitted");
    console.dir(this);  // --> 'this' refers to form
    console.log(form2.elements);

    let user = document.querySelector("#user"); //this.element[0]  
    let pass = document.querySelector("#pass"); //this.elements[1]
    
    console.log(user.value);
    console.log(pass.value);

    alert(`${user.value}, your password has been set to ${pass.value}`);
}); 
*/


/* 
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
}); 

let user = document.querySelector("#forminp");
user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value = ", this.value);
});
user.addEventListener("input", function() {
    console.log("input event");
    console.log("final value = ", this.value);
});
*/

/* 
//text editor
let newText = document.querySelector("#texteditor");
let p = document.querySelector("#para");

newText.addEventListener("input", function() {
    // console.log(newText.value); 
    p.innerText = this.value;
});
*/


/* 
let div = document.querySelector("#bubble");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function (event) {
    console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis) {
    li.addEventListener("click", function (event) {
        //event.stopPropagation(); //to stop bubbling
        console.log("li was clicked");
    });
} 
*/