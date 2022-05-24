/* Variable fija

const Lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;

Se inplementa un ciclo FOR
for (let i = 0; i < Lista1.length; i++) {
    sumaLista1 = sumaLista1 + Lista1[i];

}

const prmLista1 = sumaLista1 / Lista1.length;*/

/*
function CalcularMediaA(Lista){
    let sumaLista = 0;

    for (let i = 0; i < Lista.length; i++) {
        sumaLista = sumaLista + Lista[i];
    
    }
    
    const prmLista = sumaLista / Lista.length;

    return prmLista;
}
*/


/*Otra forma de trabajar el ciclo FOR es 
con el metodo reduce*/

function CalcularMediaA(Lista){
    
    const sumaLista = Lista.reduce(
        function (ValorAc = 0, NuevoElm) {

            return ValorAc + NuevoElm;
        }
    );

    const prmLista = sumaLista / Lista.length;

    return prmLista;
}






