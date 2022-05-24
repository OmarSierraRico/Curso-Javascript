function CalcularMediaA(Lista){
    
    const sumaLista = Lista.reduce(
        function (ValorAc = 0, NuevoElm) {

            return ValorAc + NuevoElm;
        }
    );

    const prmLista = sumaLista / Lista.length;

    return prmLista;
}


const Lista1 = [
 100,
 300,
 500,
 2000,
];

const MitadLista1 = parseInt(Lista1.length / 2);

function esPar(numero){
    if (numero % 2 === 0) {
        return true;
        
    } else {
        return false;
    }
}


let Mediana;

if (esPar(Lista1.length)) {
    const elemento1 = Lista1[MitadLista1 - 1];
    const elemento2 = Lista1[MitadLista1];
    
    const Prm1y2 = CalcularMediaA([
        elemento1,
        elemento2,
    ]);
    
    Mediana = Prm1y2;
} else {
    Mediana = Lista1[MitadLista1];
}