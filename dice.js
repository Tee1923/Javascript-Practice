/* function diceRoll () {
    console.log(Math.floor(Math.random() * 6) + 1);
}

diceRoll(); */

/* function average(num1, num2, num3) {
    let avg = (num1+num2+num3)/3;
    console.log(avg);
}

let num1 = parseInt(prompt("Enter the first number"));
let num2 = parseInt(prompt("Enters the second number"));
let num3 = parseInt(prompt("Enter the third number"));

average(num1, num2, num3); */


/* const student = {
    name: "XYZ",
    eng: 96,
    chem: 95,
    phy: 97,
    getAvg() {
        console.log(this) --> the student object
        let avg = (this.eng + this.chem + this.phy)/3;
        console.log(avg);
    } //cannot access object variables inside a func without 'this'
} 

console.log(this) --> the window object

*/


//Try catch block example
/* console.log("Hello");
console.log("Hello");
console.log(a);
console.log("Hello");
console.log("Hello");       //last two lines will not execute



console.log("Hello");
console.log("Hello");
try {
    console.log(a);
} catch (error) {
    console.log("Error found");
    console.log(error);
}
console.log("Hello");
console.log("Hello");   //everything will execute
*/

//SetInterval and SetTimeout
/* console.log("Welcome to");
setTimeout(() => {
    console.log("Hello World");
}, 4000)  


let id = setInterval(() => {
    console.log("Hello");
}, 2000);
console.log(id);
let id2 = setInterval(() => {
    console.log("Hello");
}, 2000);
console.log(id2);
clearInterval(id); //to stop 

--> to print hello 5 times using these:
let id = setInterval(() => {
    console.log("Hello");
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran");
}, 10000) 
*/


//this in arrow functions:
/* const student = {
    name: "XYZ",
    marks: 95,
    prop: this, //global scope --> window
    getName: function () {
        console.log(this);  //student
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parents scope --> window
        return this.name;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this);  //student
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this);  //window
        }, 2000);
    }
} */


//forEach:
/* let arr = [1,2,3,4,5];

arr.forEach((el) => {
    console.log(el);
});
arr.forEach(function(el) {
    console.log(el);
});
let print = function(el) {
    console.log(el);
};
arr.forEach(print);


let arr = [
    {
        name: "abc",
        marks: 95,    
    },
    {
        name: "def",
        marks: 92,    
    },
    {
        name: "xyz",
        marks: 91,    
    },
];
arr.forEach((student) => {
    console.log(student.marks);
});
 */



//map
/* let arr = [
    {
        name: "abc",
        marks: 95,    
    },
    {
        name: "def",
        marks: 92,    
    },
    {
        name: "xyz",
        marks: 91,    
    },
];
let gpa = arr.map((student) => {
    return student.marks/10;
});
*/



//filter
/* let nums = [1,2,3,4,5,6,7,8,9,10];
let final = nums.filter((el) => {
    return el % 2 == 0;
}); //array of even elements 
*/



//reduce
/* let nums = [1,2,3,4];
let finalVal = nums.reduce((res,el) => {
    console.log(res);
    return res+el;
});
console.log(finalVal);

let nums = [1,2,3,4,0,9,-7,22,9,10];
let maximum = nums.reduce((max,el) => {
    if(el > max) {
        return el;
    }
    else {
        return max;
    }
});
*/


//spread
/* 
let arr = [1,2,3,4];
let newArr = [...arr];
let chars = [..."Hello"];
console.log(arr);
console.log(newArr);
console.log(chars);
console.log(...arr);
console.log("Hello World");
console.log(..."Hello World"); 



const data = {
    email: "hello123@gmail.com",
    password: "abcd",
};
const dataCopy = {...data, id: 123, country: "India"};

let arr = [1,2,3,4];
let obj1 = {...arr};  //key will be the index

console.log(data);
console.log(dataCopy);
console.log(obj1);
*/



//rest -> opposite of spread
/* function sum(...args) {
    return args.reduce((sum,el) => sum + el);
}

function printargs(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us: ", args[i]);
    }
}

function funct(a, b, c, d) {
    console.log(arguments);
}

function min(msg, ...args) {
    console.log(msg);
    return nums.reduce((max,el) => {
        if(el > max) {
            return el;
        }
        else {
            return max;
        }
    });
}


console.log(sum(1,2,3,6,7,4));
console.log(funct(1,2,3,4));
console.log(min("Hi", 1,2,5,0,-1,7,8));
*/



//destructuring
/* let names = ["tony", "stark", "bruce", "steve", "abc", "xyz"];
let [winner, runnerup, ...others] = names;


const student = {
    name: "xyz",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "maths"],
    username: "xyz@123",
    password: "abcd",
    city: "Mumbai"
};

let {username: user, password, city: location, id: rollno = 24155817} = student;
*/