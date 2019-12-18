let quotes = ["You miss 100% of the shots you dont take", "That's what she said", "Chillis is the golf course"]

const randomThings = [1, 10, "Hello", true];

randomThings[0];

randomThings[2] = "World";

console.log(randomThings[2]);

/////////////////////////////
////// We've got class //////
/////////////////////////////

const ourClass = ["Outrun", "Zoom", "Github", "Slack"];

ourClass[2];

ourClass[2] = "Octocat";

ourClass.push("Cloud City");

console.log(ourClass)

///////////////////////////
////// Mix it Up //////////
///////////////////////////

const myArray = [5 ,10 ,500, 20];

myArray.push("Egon");

myArray.pop();

myArray.unshift("Bob Marley");

myArray.shift();

myArray.reverse();

console.log(myArray);

///////////////////////////
/////// Biggie Smalls /////
///////////////////////////

for (let i = 0; i < myArray.length; i ++) {
    if (myArray[i] < 100) {
        console.log("little number");
    } else {
        console.log("big number");
    }
};

/////////////////////////////
///// Monkey in the Middle //
/////////////////////////////


for (let i = 0; i < myArray.length; i ++) {
    if (myArray[i] < 5) {
        console.log("litle number");
    } else if (myArray[i] > 10) {
        console.log("big number");
    } else {
        console.log("monkey");
    }
};

/////////////////////////////
//// What's in your Closet //
/////////////////////////////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " + kristynsCloset[2] + " today")

  kristynsCloset.shift();

  let kristynsShoe = "left shoe";

  index = 5;

  kristynsCloset.splice(index, 0, "raybans")

  kristynsCloset[4] = "stained knit hat";

  console.log(kristynsCloset);

  console.log(thomsCloset[0][0]);

  console.log(thomsCloset[1][2]);

  console.log(thomsCloset[2][2]);

  console.log("Thom is wearing a " +  thomsCloset[0][0] + " , " + thomsCloset[1][2] + " , and some BALLIN " + thomsCloset[2][2] + "!");

  thomsCloset[1][2] = "Footie pajamas";