let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(event) {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let btn = document.createElement("button");
    btn.classList.add("delete");
    btn.innerText = "delete";
    item.appendChild(btn);

    ul.appendChild(item);
    inp.value="";
});

//bubbling
ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let delBtn = event.target;
        let liItem = delBtn.parentElement;
        liItem.remove();
    }
})


//will not work for newly created elements
/* let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns) {
    delBtn.addEventListener("click", function() {
        let liItem = delBtn.parentElement;
        liItem.remove();
    });
} */
