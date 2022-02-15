/*
function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === 	'[object Date]';

}

function calcularEdad(fechaNacimiento) {
    if (!esFecha(fechaNacimiento)) {
     throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).' );
    }
    let difereciaMilisegundos = Date.now () -fechaNacimiento.getTime();
    let edad = new Date(difereciaMilisegundos);
    return Math.abs(edad.getUTCFullYear() - 1970);
}

try {
    console.log(calcularEdad(new Date(1999, 0, 12)));

} catch (e) {
    console.log('Error: ${e.message}');
}

try {
    console.log(calcularEdad(new Date(1978, 6, 20)));

} catch (e) {
    console.log('Error: ${e.message}');
}*/

/*let textoA = "Marian";
let TextoB = "Cris";
const blanco = " y ";

let resultado = textoA + blanco + TextoB;

document.write(resultado);
*/    

/* ejemplo de else

const mayorEdad = 6;

if(mayorEdad >=18) {
    document.write("Es mayor de edad");
} else {
    document.write ("es menor de edad");
}
*/
/*
let colorFav = prompt("Hola amor, ingrasa mi color favorito ;) <3 trampa");

if (colorFav == "negro"){
   document.write("Muy biennn amorrrrrr, sabes mi color fav!");}

else {
    document.write("buuuu");
}

*/

/*const respuesta = "EVA"; //esta es la respuesta correcta

for (let contador = 0; contador <5 ; contador++) {
    let resUsuario = prompt ("Nombre de mi Perra: ");
    if (resUsuario.toUpperCase() == respuesta || resUsuario.toLowerCase() == respuesta ) { // se compra mays y minis para saber si es correcta la respueta
        alert ("Muy bien! Has acertado");
        break; // cuando la respuesta es correcta se finaliza el ciclo

} else {
 alert("Respuesta incorrecta!");
}
}
*/

/*
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUppercase();
        this.precio = parseFloat(precio);
        this.vendido =  false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto  ("tv", "10"));
productos.push(new Producto("celular", "46"));
productos.push(new Producto("Mouse", "70"));

for (const producto of productos){
producto.sumaIva();
}
console.log(productos);
*//*
function esFecha(fecha) {
    return Object.prototype.toString.call(fecha) === 	'[object Date]';

}

function calcularEdad(fechaNacimiento) {
    if (!esFecha(fechaNacimiento)) {
     throw TypeError('El argumento debe ser un objeto de tipo fecha (Date).' );
    }
    let difereciaMilisegundos = Date.now () -fechaNacimiento.getTime();
    let edad = new Date(difereciaMilisegundos);
    return Math.abs(edad.getUTCFullYear() - 1970);
}

try {
    console.log(calcularEdad(new Date(1999, 0, 12)));

} catch (e) {
    console.log('Error: ${e.message}');
}

try {
    console.log(calcularEdad(new Date(1978, 6, 20)));

} catch (e) {
    console.log('Error: ${e.message}');
}*/
