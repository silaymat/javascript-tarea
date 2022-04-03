// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = prompt ("Escribe un número");
let numero2 = prompt ("Escribe otro número");

if (numero1 > numero2){
    document.write("numero1");
} else{
    document.write(numero2);
}

//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let n1 = prompt ("Escribe un número");
let n2 = prompt ("Escribe otro número");
let n3 = prompt ("Escribe otro número");
 
if (n1 > n2 && n1 > n3){
    document.write(n1);
} else if (n2 > n3){
    document.write (n2);
} else{
    document.write (n3);
}

// Escribe un programa que pida un número y diga si es divisible por 2

let num1 = prompt ("Escriba un número");

if (num1 % 2 === o) {
    document.write ("El número es divisible por 2");
} else{
    document.write ("El número no es divisible por 2");
}