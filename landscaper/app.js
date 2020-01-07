
const tools = ["teeth", "scissors", "old mower", "fancy mower", "starving students"]
let money = 0;
let currentTool = tools[0];

console.log(currentTool);

const notEnough =() => {
    alert("not enough mulla");
}
const upgradeToolButton = document.getElementById("upgrade");
document.getElementById("toolUsing").innerHTML = currentTool;
document.getElementById("mulla").innerHTML = money;

const upgrade = () => {
    
    if (money >= 5 && money < 25 && currentTool == tools[0]) {
        currentTool = tools[1];
        console.log(currentTool);
        money -= 5;
        document.getElementById("toolUsing").innerHTML = currentTool;
    } else if (money >= 25 && money < 250 && currentTool == tools[1]) {
        currentTool = tools[1 + 1];
        console.log(currentTool);
        money -= 25;
        document.getElementById("toolUsing").innerHTML = currentTool;
    } else if (money >= 250 && money < 500 && currentTool == tools[2]) {
        currentTool = tools[2 + 1];
        console.log(currentTool);
        money -= 250;
        document.getElementById("toolUsing").innerHTML = currentTool;
    } else if (money >= 500 && money < 1000 && currentTool == tools[3]) {
        currentTool = tools[3 + 1];
        console.log(currentTool);
        money -= 500;
        document.getElementById("toolUsing").innerHTML = currentTool;
    } else if (money >= 1000) {
        alert("you just effin won that ish dawg!")
    } else {
        notEnough()
    }
    document.getElementById("mulla").innerHTML = money;
}

upgradeToolButton.addEventListener('click', upgrade)


const cutGrassButton = document.getElementById("cutGrass");

const cutLawn = () => {
   
    if (currentTool == tools[0]) {
        money += 1;
        document.getElementById("mulla").innerHTML = money;
    } else if (currentTool == tools[1]) {
        money += 5;
        document.getElementById("mulla").innerHTML = money;
    } else if (currentTool == tools[2]) {
        money += 50;
        document.getElementById("mulla").innerHTML = money;
    } else if (currentTool == tools[3]) {
        money += 100;
        document.getElementById("mulla").innerHTML = money;
    } else if (currentTool == tools[4]) {
        money += 250;
        document.getElementById("mulla").innerHTML = money;
    } else {

    }
    console.log(money);
}
    
cutGrassButton.addEventListener('click', cutLawn);


