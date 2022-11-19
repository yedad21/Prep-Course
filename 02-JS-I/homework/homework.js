// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Aguacate';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 45;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
var a = 21 & 5; // 1


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  function logbuenosdias () {
    console.log('buenosdias!');
  }

  // "Return" la string provista: str
  // Tu código:
  
}

function suma(x, y) {
  var producto = x + y
  return producto;
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
}

function resta(x, y) {
  var producto = x - y
  return producto;
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
}

function multiplica(x, y) {
  var producto = x * y
  return producto;
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
}

function divide(x, y) {
  var producto = x / y
  return producto;
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  
}

function sonIguales(x, y) {
  if  (producto = x == y) {
      return true
  }
     return false
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function tienenMismaLongitud(str1, str2) {
  if (str1 == str2){
    return true
  }
    return false
   
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function menosQueNoventa(num) {
  if (producto < 90) {
    return true
  }

  return false
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function mayorQueCincuenta(num) {
  if (producto > 50) {
    return true
  }

  return false
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function obtenerResto(x, y) {
  function dividirDosNumeros (x,y){
    var dividir = x / y
    return dividir;
  }

  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  }

function esPar(num) {
  if (num = esPar) {
    return true
  }
    return false;
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {
     
  if (num = esImpar) {
      return true
     }

      return false;

  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) {

  Math.pow(num,2) = num;

  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCubo(num) {

  Math.pow(num,3) = num;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
}

function elevar(num, exponent) {

  Math.pow(num,4) = num;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

function redondearNumero(num) {

  Math.round(num,5) = num;
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}

function redondearHaciaArriba(num) {
   
  Math.ceil(num,9) = num
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);

    console.log(Math.random());
// expected output: a number from 0 to <1
}

function esPositivo(numero) {

     var n = Math.floor(Number(str));
    if (num = n) str && n >= 0; {
       return true
    } 

    return false;
  
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}

function agregarSimboloExclamacion(str) {
 // Tu código:
 
  var a = 'hello world' 
  var b = '!'
  a = a.concat(b);
  console.log(a);

  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

  res = 'nombre' + ' ' + 'apellido';
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
   var str1 = 'Hola'
   var str2 = 'Martin!'
   var resultado = str1.concat(str2);
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  function algoritmo()
{
    let altura, anchura, area;
    altura = parseFloat (document.formulario1.altura.value);
    anchura = parseFloat (document.formulario1.anchura.value);
    area=anchura*altura;
    document.formulario1.area.value = area;
}
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

  function perimetro(lado){
     (lado*4);
    
  }
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
 
  (base*altura / 2)
  
}
  


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
} var a = euro
  var b = 1.2 
  
  console.log(a*b);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
 if (letra == 'a','e','i','o','u') {
  return 'Es Vocal'
 }
 if (letra != 'a','e','i','o','u') {
  return 'Dato incorrecto'
 }
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
