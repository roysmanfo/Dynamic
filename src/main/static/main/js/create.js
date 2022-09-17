// We could wra this whole code in a single function, but it will require more parameters and
// make the code hard to refactor


// List color buttons

// Every list color button, accessing by id becouse it makes it easier to work with attributes
const RedList = document.getElementById("list-red");
const OrangeList = document.getElementById("list-orange");
const YellowList = document.getElementById("list-yellow");
const GreenList = document.getElementById("list-green");
const BlueList = document.getElementById("list-blue");
const PurpleList = document.getElementById("list-purple");
const PinkList = document.getElementById("list-pink");
const GrayList = document.getElementById("list-gray");

const ListColors = [RedList, OrangeList, YellowList, GreenList, BlueList, PurpleList, PinkList, GrayList];

// Under the hood after clicking on a button, an element from the actual color select tag in the original form
// gets selected and chhosed as the new list color
const SelectListColor = document.getElementById("id_color").children;

// For every button we manage the work under the hood and a visual feedback for the user 
for (let i = 0; i < ListColors.length; i++) {
    const element = ListColors[i];
    element.addEventListener("click", () => {
        if (SelectListColor[i+1].getAttribute("selected") == '') {
            SelectListColor[i+1].removeAttribute("selected");
            SelectListColor[0].setAttribute("selected","");
            ListColors[i].classList.remove("selected");
            return;
        }
    
        for (let j = 0; j < SelectListColor.length; j++) {
            SelectListColor[j].removeAttribute("selected");
            if (j!=0 && ListColors[j-1].classList.contains("selected"))
                ListColors[j-1].classList.remove("selected");
        }
        SelectListColor[i+1].setAttribute("selected","");
        ListColors[i].classList.add("selected");
    })
}


// Same thing with Tasks

// Every list color button
const RedTask = document.getElementById("task-red");
const OrangeTask = document.getElementById("task-orange");
const YellowTask = document.getElementById("task-yellow");
const GreenTask = document.getElementById("task-green");
const BlueTask = document.getElementById("task-blue");
const PurpleTask = document.getElementById("task-purple");
const PinkTask = document.getElementById("task-pink");
const GrayTask = document.getElementById("task-gray");

const TaskColors = [RedTask, OrangeTask, YellowTask, GreenTask, BlueTask, PurpleTask, PinkTask, GrayTask]

// Under the hood after clicking on a button, an element from the actual color select tag in the original form
// gets selected and chhosed as the new task color
const SelectTaskColor = document.getElementById("id_task_color").children;

// For every button we manage the work under the hood and a visual feedback for the user 
for (let i = 0; i < TaskColors.length; i++) {
    const element = TaskColors[i];
    element.addEventListener("click", () => {
        if (SelectTaskColor[i+1].getAttribute("selected") == '') {
            SelectTaskColor[i+1].removeAttribute("selected");
            SelectTaskColor[0].setAttribute("selected","");
            TaskColors[i].classList.remove("selected");
            return;
        }
    
        for (let j = 0; j < SelectTaskColor.length; j++) {
            SelectTaskColor[j].removeAttribute("selected");
            if (j!=0 && TaskColors[j-1].classList.contains("selected"))
                TaskColors[j-1].classList.remove("selected");
        }
        SelectTaskColor[i+1].setAttribute("selected","");
        TaskColors[i].classList.add("selected");
    })
}

