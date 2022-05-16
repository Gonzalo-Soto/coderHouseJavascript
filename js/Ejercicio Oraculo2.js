let userName = "Gonza";
userName ? console.log("hello " + userName + "!") : console.log("Hello!");

let userQuestion = "Voy a ser millonario este año?";
console.log(userName + ": " + userQuestion);

randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
case 0:
    alert((eightBall = "Puede ser que si"));
    break;
case 1:
    alert((eightBall = "Quiza el año proximo"));
    break;
case 2:
    alert((eightBall = "Primero aproba en CODER"));
    break;
case 3:
    alert((eightBall = "Si, pero no inviertas en crypto"));
    break;
case 4:
    alert((eightBall = "Si... Claro"));
    break;
case 5:
    alert((eightBall = "Los espiritus dicen que no"));
    break;
case 6:
    alert((eightBall = "Ni de casualidad"));
    break;
case 7:
    alert((eightBall = "Mejor ponete a laburar"));
    break;
}
