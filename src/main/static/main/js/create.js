
// List color buttons

// Evrey list color button
const RedList = document.getElementById("list-red");
const OrangeList = document.getElementById("list-orange");
const YellowList = document.getElementById("list-yellow");
const GreenList = document.getElementById("list-green");
const BlueList = document.getElementById("list-blue");
const PurpleList = document.getElementById("list-purple");
const PinkList = document.getElementById("list-pink");
const GrayList = document.getElementById("list-gray");

const ListColors = [RedList, OrangeList, YellowList, GreenList, BlueList, PurpleList, PinkList, GrayList]

// Under the hood after clicking on a button, an element from the actual color select tag in the original form
// gets selected and chhosed as the new list color
const select = document.getElementById("id_color").children;

function changeSelected(index){
    if (select[index].getAttribute("selected")) {
        select[0].setAttribute("selected")
    }

    select[index].setAttribute("selected","");

    for (let i = 0; i < select.length; i++) {
        const element = select[i];
        element.removeAttribute("selected");
    }
}

// For every button we manage the work under the hood and a visual feedback for the user 
for (let i = 0; i < ListColors.length; i++) {
    const element = ListColors[i];
    element.addEventListener("click", () => {
        if (select[i+1].getAttribute("selected") == '') {
            select[i+1].removeAttribute("selected");
            select[0].setAttribute("selected","");
            ListColors[i].classList.remove("selected");
            return;
        }
    
        for (let j = 0; j < select.length; j++) {
            select[j].removeAttribute("selected");
            if (j!=0 && ListColors[j-1].classList.contains("selected"))
                ListColors[j-1].classList.remove("selected");
        }
        select[i+1].setAttribute("selected","");
        ListColors[i].classList.add("selected");
    })
}

