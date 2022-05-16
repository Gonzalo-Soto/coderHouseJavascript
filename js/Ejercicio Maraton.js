let raceNumber = Math.floor(Math.random() * 1000);

let registroTemprano = confirm("Sos mayor de 18 y queres largar a las 9:30am pulsa Aceptar, si queres largar 11:00hs pulsa cancelar, si tenes 18 o menos toca cualquiera");

const edadCorredor = parseInt(prompt("Ingresa tu edad:"));

if (edadCorredor > 18 && registroTemprano) {
(raceNumber += 1000)
alert("Tu horario de largada es 9:30 am y tu numero de corredor es: " + raceNumber);
} else if (edadCorredor > 18 && !registroTemprano) {
alert("Tu horario de largada es 11:00 am y tu numero de corredor es: " + raceNumber);
} else if (edadCorredor < 18) {
alert("Tu horario de largada es 12:30hs");
} else {
alert("Presentarse en mesa de entrada");
}