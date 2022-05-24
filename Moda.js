const Lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,

];

const Lista1Count = {};//La lista se convierte en un objeto

Lista1.map(
    function(elemento){
        if(Lista1Count[elemento]){
            Lista1Count[elemento] =+ 1;
        }else {
             Lista1Count[elemento] = 1;
        }
       
    }
);

//Object.entries convierte el objeto en un Array
const ListaArray = Object.entries(Lista1Count).sort(
    function (elementoA, elemntoB){

        return elementoA[1] - elemntoB[1];

    }
);

const Moda = ListaArray[ListaArray.length - 1];