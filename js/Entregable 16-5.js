
//Se pregunta al usuario si tiene que realizar un pago
let pregunta=prompt("Tiene que realizar un pago?\n Responda con Si o No");
//Si la respuesta es Si , entonces luego se le pregunta cual es el monto que tiene que pagar.Si la respuesta es No, no se sigue con el proceso
while(pregunta=="si"){
//Se pide al usuario ingresar el monto que tiene que pagar
let total=parseInt(prompt("Ingrese el monto total de su compra: "));
if(!isNaN(total) && total !== "" && total!== 0){
	//Si el usuario tiene que pagar una cantidad mayor a 4000 tendra un desceunto del 15%, de lo contrario no tendra ningun descuento
	if (total >4000){
		alert("Usted tiene un descuento del 15% " );
		
	}else{
		alert("Usted no tiene ningun descuento");
		
	}
}



//Funcion para calcular el descuento del 15% si es que lo tiene
function descuento(total){

	if(total>4000){
	return(total*0.15);
	}else{
		return(total*0);

	}

}
let descuentoP=descuento(total);
alert("Su descuento del 15% es de : " + descuentoP);

//Funcion para calcular el IVA
function iva(total){
	return (total*0.21);
}

let ivaprecio=iva(total);
alert("El calculo del iva sobre el precio es de: "+ (ivaprecio+total));

//Funcion para calcular el precio final con IVA y descuento incluidos
function totalaPagar(total){

	return ((total+ivaprecio)-descuentoP); 
}

let pagarTotal=totalaPagar(total);
alert("El total a pagar con descuentos e IVA incluidos es de: " + pagarTotal);
pregunta=prompt("Tiene que ralizar otro pago? \nResponda con si o no");

}