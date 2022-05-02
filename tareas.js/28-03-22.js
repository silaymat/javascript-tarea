
// Obtener un número aleatorio entre 1 y 100

let numeroAleatorio=(Math.ceil(Math.random()*100))
console.log(numeroAleatorio);
//Calcular su raíz cuadrada y mostrar en consola

console.log(`La raiz cuadrada de ${numeroAleatorio} es ${Math.sqrt(numeroAleatorio)}`);
//Elevarlo a la quinta potencia y mostrar en consola


let exponente = 5
console.log(`El número ${numeroAleatorio} elevado a la potencia ${exponente} es de ${Math.pow(numeroAleatorio,exponente)}`);

// Mostrar en consola en número mayor y menor de una lista
console.log(`El número mayor de la lista es ${Math.max(120,250,78.96,-38,45.72,1450,2380)}`);
console.log(`El número menor de la lista es ${Math.min(120,250,78.96,-38,45.72,1450,2380)}`);


//Dado los siguientes números, dejarlos con dos decimales y mostrar en consola los mismos redondeados.
let numero1 = 45.895025
let numero2 = 56.788789
let numero3 =78.413582

let n1_dec =(parseFloat(numero1.toFixed(2)))
console.log(`El número redondeado es ${Math.round(n1_dec)}`);

let n2_dec =(parseFloat(numero2.toFixed(2)))
console.log(`El número redondeado es ${Math.round(n2_dec)}`);

let n3_dec =(parseFloat(numero3.toFixed(2)));
console.log(`El número redondeado es ${Math.round(n3_dec)}`);
