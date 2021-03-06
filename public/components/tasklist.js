const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

button.addEventListener("click", function (event) {
    //browser functionality, checking that it auto happens
    event.preventDefault();
    // storing retrieved values 
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;

    addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
    console.log(tasklist);
})

var taskListArray = [];

function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        completionTime,
        priorityRating,
        estimatedTime,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray)
    renderTask(task);
    renderHome(task);
}


// this is for the task list 

function renderTask(task){
// creates the html elements 
    updateEmpty();

    let itemT = document.createElement("li");
    itemT.setAttribute('data-id', task.id);
    itemT.innerHTML = "<p>" + task.taskDescription + "</p";

   //task to array 
    tasklist.appendChild(itemT);

    //priorityrating colour (doesnt work)

    // if (task.priorityRating="Low"){
    //     itemT.style.backgroundColor="green";
    // } else if (task.priorityRating = "Medium") {  
    //     itemT.style.backgroundColor="yellow";
    //   } else { 
    //     (task.priorityRating = "High") 
    //     itemT.style.backgroundColor="red";
    //   }
    itemT.style.backgroundColor="white"; // background colour of the li output 

 // DOM elements - delete button 
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    itemT.appendChild(delButton);

    delButton.style.float = "right";
    delButton.style.width ="100px";
  //  delButton.style.right = "600px";
    delButton.style.position = "relative";
    delButton.style.top = "-40px";
// Event listeners for delete button 
    delButton.addEventListener("click", function(event){
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray,index);
        updateEmpty();
        itemT.remove();
    })


    form.reset();
}
// Clears user input from array 
function removeItemFromArray(arr,index) {
    if (index > -1){
        arr.splice(index, 1);
    }
    return arr;
}

function updateEmpty() {
    if (taskListArray.length > 0 ){
        document.getElementById('emptyList').style.display = 'none';
    } else {
        document.getElementById('emptyList').style.display = 'block';
    }
 }

 //this takes the task list values from tasklist to the home page 
 function renderHome(task){

    updateEmpty();

    let item = document.createElement("p");
    let dateItem = document.createElement("p");
    let estItem = document.createElement("p");
    item.setAttribute('data-id', task.id);
    dateItem.setAttribute('data-id', task.id);
    estItem.setAttribute('data-id', task.id);

    item.innerHTML = "<p>" + task.taskDescription + "</p";
    dateItem.innerHTML = "<p>" + task.dueDate + "</p";
    estItem.innerHTML = "<p>" + task.estimatedTime + " minutes"+ "</p";

    let home = document.getElementById("home");
    home.appendChild(item);
    home.appendChild(dateItem);
    home.appendChild(estItem);


    //this is for user task, html elements 
    item.style.backgroundColor ="white";
  //  item.style.opacity = "70%";
    item.style.borderRadius = "20px";
    item.style.width = "700px";
    // item.style.height = "20px";
    item.style.display = "flex";
    item.style.padding="20px";
    item.style.float="left";
    item.style.border = "solid";


    //this is for due date, html elements 
    dateItem.style.backgroundColor ="white";
    dateItem.style.borderRadius = "20px";
    dateItem.style.outline = " black";
    dateItem.style.width = "300px";
    dateItem.style.height = "60px";
    dateItem.style.position = "relative";
    dateItem.style.left ="70px";
    dateItem.style.float ="left";
    dateItem.style.display = "inline";
    dateItem.style.padding ="20px";
    dateItem.style.border = "solid";

    //this is for estimated time data
    estItem.style.backgroundColor ="white";
    estItem.style.borderRadius = "20px";
    estItem.style.outline = " black";
    estItem.style.width = "200px";
    estItem.style.height = "60px";
    estItem.style.position = "relative";
    estItem.style.left ="120px";
    estItem.style.float ="left";
    estItem.style.display = "inline";
    estItem.style.padding ="20px";
    estItem.style.border = "solid";

   
    let compButton = document.createElement("button");
    let compButtonText = document.createTextNode("Complete");
    compButton.appendChild(compButtonText);
    item.appendChild(compButton);


    compButton.style.position = "absolute";
    compButton.style.right ="180px";
    compButton.style.border = "solid";
    compButton.style.height = "60px";
    compButton.style.borderColor = "green";
    compButton.style.backgroundColor = "lightgreen";
    compButton.style.borderRadius = "20px";




    compButton.addEventListener("click", function(event){
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex(task => task.id === Number(id));
        removeItemFromArray(taskListArray,index);
        item.remove();
        dateItem.remove();
        estItem.remove();
        document.getElementById('beep').play(); //when you click on complete button, plays a jingle 
    })
    


    form.reset();
}