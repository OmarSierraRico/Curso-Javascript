/*const PrcInicial = 100;
const Descuento = 15;*/

function CalcularPrcomDesc(Precio,Descuento){
    const PorDescuento = 100 - Descuento;
    const PrcDescuento = (Precio * PorDescuento) / 100;

    return PrcDescuento;
}


/* Aca se puede llamar al console.log
Con un objeto ({}) y lllamar a todas las variables
Que son los atributos

console.log({
    PrcInicial,
    Descuento,
    PorDescuento,
    PrcDescuento,
});
*/

function ClickDescuento(){
    const InputPrice = document.getElementById("InputPrice");
    const PriceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = InputDiscount.value;

    const PrcDescuento = CalcularPrcomDesc (PriceValue, DiscountValue);

    const Resultp = document.getElementById("Resultp");
    Resultp.innerText = "EL TOTAL CON DESCUENTO ES: $" + PrcDescuento;

}  

