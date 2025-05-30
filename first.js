let todo = [];
let request = prompt("please enter your request");

while (true) {
    if (request === "quit") {
        console.log("You quit the app");
        break;
    } else if (request === "add") {
        let addtolist = prompt("Enter task to be added ");
        todo.push(addtolist);
    } else if (request === "list") {
        console.log("Your tasks:");
        for (let task of todo) {
            console.log(task);
        }
    } else if (request === "delete") {
        let deletion = prompt("Enter the task to be deleted");
        let idx = todo.indexOf(deletion);
        if (idx != -1) {
            todo.splice(idx, 1);
            console.log(`Deleted: ${deletion}`);
        } else {
            console.log("Task does not exist");
        }
    } else {
        console.log("Wrong input");
    }

    request = prompt("please enter your request");  
}
