/*const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers);

[10, 2, 30, 4, 5] lo que pasa con esto esque lo que yo pondo adentro del corchete el numero que 
yo quiero cambiar

let numero = [1, 2, 3, 4];

function sumarPares(numeros) {
  let suma = 0;
  let i = 0; // lo usaremos como índice
  while (i < numeros.length) {
    if (numeros[i] % 2 === 0) {
      suma = suma + numeros[i];
    }
    console.log(suma); // imprime el elemento en la posición i
    i++; // incrementamos el índice en 1 para la siguiente iteración
  }
}
sumarPares(numero);

//Ejercicio:
//Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".

let palabras = ["juega", "casa", "mesa"];
function terminanEnA(words) {
  const todosTerminanEnA = words.every((word) => word.endsWith("a"));
  console.log(todosTerminanEnA);
}

terminanEnA(palabras);

//actividad 5
let numeros = [5, -10, -2, -25, -7];
function ordenarValoresAbsoluto(numbers) {
  let valores = [];
  for (let number of numbers) {
    const numeroAbsoluto = Match.abs(number);
    valores.push(numeroAbsoluto);
  }
  return valores.sort(function (a, b) {
    return a - b;
  });
}
console.log(ordenarValoresAbsoluto(numero));

*/
//actividad 6
/*const words = [
  "hola",
  "tres",
  "uno",
  "Universidad",
  "de",
  "Buenos Aires",
  "pepito",
  "celular",
];

const word = "pepito";

let palabraLargas = [];
function buscaPalabras(words, word) {
  const posicionPalabra = words.indexOf(word);
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > posicionPalabra) {
      palabraLargas.push(words[i]);
    }
  }
  return palabraLargas;
}
console.log(buscaPalabras(words, word));
*/

function createObject(name, subs) {
  const obj = {
    name,
    subs,
    hash: name.length * subs,
    getStatus: function () {
      //manera larga -> console.log("el canal ", nombre, " tiene", subs)
      return `el canal ${name} tiene ${subs}`; // -> abreviado
    },
  };
  return obj;
}
const persona = createObject("cuchara", 2);
/*const hashUsuario = persona.hash;

console.log(hashUsuario); 
es para que no salga el personas.
*/
/*
objetos 2:
1- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? y por que? 
saca lo que tiene persona y despues imprime el peso y la altura.
2- ¿Qué se imprimirá en la consola al ejecutar el siguiente código? Y por que?
salta error porque esta mal escrito y se pisan entre si.
3- ¿Cómo se llama el atajo que nos permite recuperar el valor de una propiedad de un objeto?
el nombre del atajo llama "Destructuracion"
*/
