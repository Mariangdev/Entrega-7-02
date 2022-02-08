
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
}