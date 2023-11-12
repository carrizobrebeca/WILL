/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
    // var numStr = num.toString();
    // var numReverso = numStr.split('').reverse().join('');
    // return numStr === numReverso;
    var numStr = num.toString();

    // Obtener la longitud del número
    var longitud = numStr.length;

    // Comparar los dígitos de los extremos hacia el centro
    for (var i = 0; i < longitud / 2; i++) {
        if (numStr[i] !== numStr[longitud - 1 - i]) {
            return false;
        }
    }

    // Si todos los dígitos coinciden, el número es simétrico
    return true;
}

  

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico