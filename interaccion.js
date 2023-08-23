function calcularIMC(peso, altura){
    return (peso/(altura*altura));
}
function imprimir(frase){
    document.write(frase);
}
var nombre = prompt("Por favor, ingrese su nombre: ");
var peso = prompt("Por favor "+ nombre+", ingrese su peso: ");
var altura = prompt("Por favor "+ nombre+", ingrese su altura: ");
var imc;

imc = calcularIMC(peso, altura);

imprimir("El ínidice de masa coorporal calculado según los datos de "+nombre+" es de: "+ imc );