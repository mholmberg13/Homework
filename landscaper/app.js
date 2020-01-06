
const tools = ["teeth", "scissors", "old mower", "fancy mower", "starving students"]
let money = 0;
let currentTool = tools[0];
i = 0;
console.log(currentTool);

const upgradeToolButton = document.getElementById("upgrade");

const upgrade = () => {
    currentTool = tools[i += 1];
    console.log(currentTool);
    return i;
}
upgradeToolButton.addEventListener('click', upgrade)


const cutGrassButton = document.getElementById("cutGrass");

const cutLawn = () => {
   
    if (currentTool == tools[0]) {
        money += 1;
    } else if (currentTool == tools[1]) {
        money += 5;
    }
    console.log(money);
}
    
cutGrassButton.addEventListener('click', cutLawn);


