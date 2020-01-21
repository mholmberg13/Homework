// create Serenity object
// hull: 20, firepower: 5, accuracy: .7
let serenity = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: enemyShip => {
        console.log("player attacking enemy ship");
        
        if (Math.random() < serenity.accuracy){
            console.log("attack sucessful!");
        } else {
            console.log("missed")
        }
        
        console.log(enemyShip);
        
        if (Math.random() < enemies[0].accuracy) {
            console.log("you have been hit")
        }

    }
};


// create AlienShip class
class AlienShip {
    constructor() {
      // Make hull random between 3 and 6
      this.hull = Math.floor(Math.random() * 4 + 3);
      // Make random between 2 and 4
      this.firepower = Math.floor(Math.random() * 3 + 2);
      // TODO: Make random between .6 and .8
      this.accuracy = Math.floor(Math.random() * 3 + 6) * 0.1;
      return this.hull;
    }
   
    
}


const attack = () => {
    console.log("Alien ship is attacking");
    if (Math.random() < enemies[0].accuracy) {
        console.log("Alien ship hit player");
        serenity.hull -= enemies[0].firepower;
        console.log("Serenity's remaining hull: " + serenity.hull);
    } else {
        console.log("Alien ship missed you");
    }
}

const response = () => {
    prompt("Ship destroyed, attack or retreat?");

    if (response === wrongAnswer) {
        // user retreats, end game loop
        alert("you retreated, game over");
       // break;
        } else if (response === answer) {
        // keep looping
        console.log("continuing gameplay")
    } else {
        // enemy ot destroyed, their turn to attack
        attack();
    }
}

const alienDestroyed = () => {
    enemies.shift();
}

const hit = () => {
    enemies[0].hull -= serenity.firepower;
}

const serenityAttack = () => {
    console.log("attacking alien ship");
    if (Math.random() < serenity.accuracy) {
        console.log("You hit alien ship");
        hit();
        console.log(enemies[0].hull);
        attack();
        if (enemies[0].hull <= 0) {
            alienDestroyed();
            response();
        };

        
    } else {
        console.log("missed alien ship");
        attack();
    }
    
}


// start the game
console.log("Generating enemy ships...");
enemy = new AlienShip();
console.log(enemy);


// create alienShips array containing all alienShip
enemies = [];

for (let i = 0; i < 6; i++) {
    enemies.push(new AlienShip());

}

console.log(enemies);
const answer = "attack" || "Attack";
const wrongAnswer = "retreat" || "Retreat";

const gamePlay = () => {
    
    if (enemies.length === 0) {
        alert("YOU WON!")
    } else if (serenity.hull <= 0) {
        alert("YOU DEAD SON! YOU LOSE!")
    }
    const reply = prompt("attack or retreat?");

    if (answer === reply) {
        serenityAttack();
        gamePlay();
    } else if (wrongAnswer === reply){
        console.log("you lose... you retreated... wah wah wahhhhhhh");
    }
    
}

gamePlay();

// while (gameState.playerIsAlive()) {
//     // turn by turn logic
//     // serenity attacks
//     serenity.attack(AlienShip);
// }





// check if enemy ship is destroyed




// battle
// make destroyed fucntion that removes alienShip from alienShips array


// retreat option
// end game logic