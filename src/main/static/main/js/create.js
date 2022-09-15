
// List color buttons
const RedList = document.getElementById("list-red");
const OrangeList = document.getElementById("list-orange");
const YellowList = document.getElementById("list-yellow");
const GreenList = document.getElementById("list-green");
const BlueList = document.getElementById("list-blue");
const PurpleList = document.getElementById("list-purple");
const PinkList = document.getElementById("list-pink");
const GrayList = document.getElementById("list-gray");
const ListColors = [RedList, OrangeList, YellowList, GreenList, BlueList, PurpleList, PinkList, GrayList]
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

for (let i = 0; i < ListColors.length; i++) {
    const element = ListColors[i];
    element.addEventListener("click", () => {
        if (select[i+1].getAttribute("selected") == '') {
            select[i+1].removeAttribute("selected");
            select[0].setAttribute("selected","");
            return;
        }
    
        for (let i = 0; i < select.length; i++) {
            const element = select[i];
            element.removeAttribute("selected");
        }
        select[i+1].setAttribute("selected","");
    })
}

