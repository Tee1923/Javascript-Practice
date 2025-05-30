let gameSeq = [];
let userSeq = [];

let colours = ["blue", "yellow", "green", "red"];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if(started === false) {
        started = true;
        level++;

        let h2 = document.querySelector("h2");
        h2.innerText = `Level ${level}`;

        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    
    let num = Math.floor(Math.random() * 4);
    let col = colours[num];
    let btn = document.querySelector(`#${col}`);
    console.log(btn);

    gameSeq.push(col);
    console.log(gameSeq);
    btnFlash(btn);
}


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

let boxes = document.querySelectorAll(".box");
for(box of boxes) {
    box.addEventListener("click", btnPress);
}

function btnPress() {
    btnFlash(this);
    let id = this.getAttribute("id");
    userSeq.push(id);

    chackAns(userSeq.length - 1);
}

function chackAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            let h2 = document.querySelector("h2");
            h2.innerText = `Level ${level}`;
            setTimeout(levelUp, 1000);
        }
    } else {
        let h2 = document.querySelector("h2");
        h2.innerHTML = `game over! your score was ${level} <br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function reset() {
    started =  false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}