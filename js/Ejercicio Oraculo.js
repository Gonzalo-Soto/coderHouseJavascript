let userName = prompt("Ingrese su nombre");
userName ? console.log("Hola " + userName + "!") : console.log("Hola!");

let userQuestion = prompt("Hace una pregunta relacionada a tu futuro economico");
if (!userName){
    userName = "Anonimo";
}
console.log(userName + ": " + userQuestion);

randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
    case 0:
        eightBall = "Puede ser que si";
        break;
    case 1:
        eightBall = "Quiza el año proximo";
        break;
    case 2:
        eightBall = "Primero aproba en CODER";
        break;
    case 3:
        eightBall = "Si, pero no inviertas en crypto";
        break;
    case 4:
        eightBall = "Si... Claro";
        break;
    case 5:
        eightBall = "Los espiritus dicen que no";
        break;
    case 6:
        eightBall = "Ni de casualidad";
        break;
    case 7:
        eightBall = "Mejor ponete a laburar";
        break;
    }
    
    console.log(eightBall);
    
