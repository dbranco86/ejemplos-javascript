//EJERCICIO PARA LA PRE ENTREGA

const PRODUCTO_1 = "EMPANADA";
const PRODUCTO_2 = "HAMBURGUESA";
const PRODUCTO_3 = "MILANESA";
const PRODUCTO_4 = "REFRESCO"
const TIPO_MONEDA = "USD"

alert("Bienvenidos a Fast Food \n" + "INSUMOS DEL DIA: \n\n" + PRODUCTO_1 + " " + "10" + TIPO_MONEDA + " " + "\n" + PRODUCTO_2 + " " + "15" + TIPO_MONEDA + " " + "\n" + PRODUCTO_3 + " " + "20" + TIPO_MONEDA + " " + "\n" + PRODUCTO_4 + " " + "5" + TIPO_MONEDA);
let seleccion = prompt ("Bienvenidos a Fast Food \n" + "Seleccione un producto de la lista: \n\n" + PRODUCTO_1 + "\n" + PRODUCTO_2 + "\n" + PRODUCTO_3 + "\n" + PRODUCTO_4);
let precioProducto;
let confirmar;
let cantidad;

// COMPRUEBA  EL INGRESO DE DATOS //
while (seleccion == ""){
   alert("Debe ingresar un producto");
   seleccion = prompt ("Seleccione un producto de la lista: \n\n" + PRODUCTO_1 + "\n" + PRODUCTO_2 + "\n" + PRODUCTO_3 + "\n" + PRODUCTO_4);
}

while ((seleccion != PRODUCTO_1) && (seleccion != PRODUCTO_2) && (seleccion != PRODUCTO_3) && (seleccion != PRODUCTO_4)) {
   alert("Debe ingresar un producto correcto");
   seleccion = prompt ("Seleccione un producto de la lista: \n\n" + PRODUCTO_1 + "\n" + PRODUCTO_2 + "\n" + PRODUCTO_3 + "\n" + PRODUCTO_4);
}

   if (seleccion == PRODUCTO_1){
      precioProducto = 10;
      alert("Usted ha escogido EMPANADA");
   }else if (seleccion == PRODUCTO_2){
      precioProducto = 15;
      alert("Usted ha escogido HAMBURGUESA");
   }else if (seleccion == PRODUCTO_3){
      precioProducto = 20;
      alert("Usted ha escogido MILANESA");
   }else if (seleccion == PRODUCTO_4){
      precioProducto = 5;
      alert("Usted ha escogido Refresco");
   }

// PIDE LA CANTIDAD //
do {
   cantidad = Number (prompt ("Ingrese la cantidad: "));
}
while (isNaN (cantidad));

// COMPRUEBA LA CANTIDAD INGRESADA //
while ((cantidad == "") || (cantidad == 0)){
   alert("Debe ingresar una cantidad");
   cantidad = prompt ("Ingrese la cantidad: ");
}

alert ("Su pedido es: \n\n" + "Cantidad:" + " " + cantidad + "\n" + "Producto:" + " " + seleccion);
confirmar = prompt("Favor confirme su compra:" + "\n\n" + "Para continuar presione: S" + "\n" + "Para salir presione: N");

// COMPRUEBA EL INGRESO DE DATOS //
while ((confirmar.toUpperCase() != "S") && (confirmar.toUpperCase() != "N")) {
   alert("Debe ingresar una opción correcta");
   confirmar = prompt("Favor confirme su compra:" + "\n\n" + "Para continuar presione: S" + "\n" + "Para salir presione: N");
}

// CONFIRMAR COMPRA //
if (confirmar.toUpperCase() == "S"){
   let precioTotal = cantidad * precioProducto;
   alert ("Su orden es: \n" + "\n" + "Producto: " + seleccion + "\n" + "Cantidad: " + cantidad + "\n" + "Total a pagar: " + precioTotal + TIPO_MONEDA);
   alert ("Gracias por su compra!");
}else if (confirmar.toUpperCase() == "N") {
   alert ("Gracias por su visita!");
}





