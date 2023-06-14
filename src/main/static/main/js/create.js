// We could wrap the whole color code section in a single function, but it will require more parameters and
// make the code hard to refactor


// List color buttons

// Every list color button, accessing by id becouse it makes it easier to work with attributes
const ListColors = document.querySelectorAll('.color-selector')[0].children;

// Under the hood after clicking on a button, an element from the actual color select tag in the original form
// gets selected and chhosed as the new list color
const SelectListColor = document.getElementById("id_color").children;

// For every button we manage the work under the hood and a visual feedback for the user 
for (let i = 0; i < ListColors.length; i++) {
    const element = ListColors[i];
    const bg = ListColors[i].style.background.substring(4, ListColors[i].style.background.length - 2);
    element.addEventListener("click", () => {
        if (SelectListColor[i+1].getAttribute("selected") == '') {
            SelectListColor[i+1].removeAttribute("selected");
            SelectListColor[0].setAttribute("selected","");
            ListColors[i].setAttribute('style',`background: var(${bg}1);`);
            return;
        }
                
        for (let j = 0; j < ListColors.length; j++) {
            let nbg = ListColors[j].style.background.substring(4, ListColors[j].style.background.length - 2)
            SelectListColor[j].removeAttribute("selected");
            
            if (ListColors[j].getAttribute('style').includes("border"))
                ListColors[j].setAttribute('style',`background: var(${nbg}1);`);
            
        }

        
        SelectListColor[i+1].setAttribute("selected","");
        ListColors[i].setAttribute('style',`background: var(${bg}1); border: solid 2px var(${bg}3);`);
    })
}


// Same thing with Tasks
const TaskColors = document.querySelectorAll('.color-selector')[1].children;

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



// Here we modify the position of the create section
const TASK_FORM = document.getElementById("CreateTaskForm");
const LIST_FORM = document.getElementById("CreateListForm");

function showSection(target){
    // target can be eather "task" or "list": "task" will open the section and show the CreateTaskForm
    // and "list" will show the CreateListForm

    const CREATE_SECTION = document.getElementById("create-section");
    if (CREATE_SECTION.hasAttribute("style") && CREATE_SECTION.getAttribute("style") == "right: 0%;"){
        if (target == "task") {
            TASK_FORM.classList.remove("hiddenForm");
            LIST_FORM.classList.add("hiddenForm")   
        }else{
            LIST_FORM.classList.remove("hiddenForm");
            TASK_FORM.classList.add("hiddenForm") 
        }
    }else{
        CREATE_SECTION.setAttribute("style","right: 0%;");
        document.getElementById("dashboard-tasks").classList.add("normalize");
        showSection(target);
    }
}

const CREATE_TASK_BUTTON = document.getElementById("create-task-btn");
const CREATE_LIST_BUTTON = document.getElementById("create-list-btn");

CREATE_TASK_BUTTON.addEventListener("click", () => {showSection("task");});
CREATE_LIST_BUTTON.addEventListener("click", () => {showSection("list");});

const CLOSE_FORM_BTN = document.querySelectorAll(".form-header>.material-symbols-outlined");
for (let i = 0; i < CLOSE_FORM_BTN.length; i++) {
    CLOSE_FORM_BTN[i].addEventListener("click", () => {
        const CREATE_SECTION = document.getElementById("create-section");
        CREATE_SECTION.removeAttribute("style");
        document.getElementById("dashboard-tasks").classList.remove("normalize");
    });
}