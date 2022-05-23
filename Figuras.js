console.group("CUADRADO");//agrupa por bloque
// Cuadrado
/*const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "CM");*/

function perimetroCuadrado(lado){
    return  lado * 4;
}
//console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "CM");

function areaCuadrado (lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "CM^2 ");

console.groupEnd(); // cierra la agrupacion del bloque

console.group("TRIANGULO");
//Triangulo
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;*/
function PrTriangulo (lado1,  lado2,  base) {
    return lado1 + lado2 + base;
}
function areaTriangulo  (base,altura){
    return (base * altura)/2;
}
/*console.log(
    "Los lados del triangulo miden:"
        + ladoTriangulo1 + "CM, "
        + ladoTriangulo2 + "CM, "
        + baseTriangulo + "CM"
);
console.log(
    "la altura del traingulo es: "
        + alturaTriangulo + "CM,");*/

console.log("El area del cuadrado es: " + areaTriangulo + "CM^2");

console.groupEnd();

//Circulo
console.group("Circulos");

/*Radio
const rd = 4;
console.log("El radio  es: " + rd + "CM");*/

//Diametro
function dmt (radio){
    return radio * 2;
}

//PI
const PI = Math.PI;//Herramienta Math
console.log("PI  es: " + PI  + "CM");

//Circunferencia
function prmCirculo (radio){
    const diametro = dm(radio);//Aca se llama a otra funcion
    return diametro * PI;
}


//Area
function area (radio) {
    return (rd * rd) * PI;
} 


console.groupEnd();

/*Aca se crea las funciones de onclick
que aparece en HTML en Button*/

function CalPerimetro(){
    const input = document.getElementById("Cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function CalArea(){
    const input = document.getElementById("Cuadrado");
    const value = input.value;

    const Area = areaCuadrado(value);
    alert(Area);
    
}
