//Se utiliza el evento MAP
const SlColombia = Colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const SalariosColSorted = SlColombia.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;

    }
);

//Para sacar la moda
function esPar(numero) {
    return (numero % 2 === 0);
}

    /*Se puede hacer de esta forma pero es mas largo

    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }*/
    function CalcularMediaA(Lista){
    
        const sumaLista = Lista.reduce(
            function (ValorAc = 0, NuevoElm) {
    
                return ValorAc + NuevoElm;
            }
        );
    
        const prmLista = sumaLista / Lista.length;
    
        return prmLista;
    }
    

// Para sacar la mediana general
function MdSalarios(Lista){
    const mitad = parseInt(Lista.length / 2);

    if (esPar(Lista.length)) {
        const PrMitad1 = Lista[mitad -1];
        const PrMitad2 = Lista[mitad];

        const mediana = CalcularMediaA([PrMitad1, PrMitad2]);
        return mediana;

    } else {
        const PrMitad = Lista[mitad];
        return PrMitad;
    }

}
const MedianaGeneralCol = MdSalarios(SalariosColSorted)

//Mediana Top 10%
const SpliceStart = (SalariosColSorted.length * 90) / 100;
const SpliceCount = SalariosColSorted.length - SpliceStart;

const SalariosTop = SalariosColSorted.splice(
    SpliceStart,
    SpliceCount,
);

const MedianaTop10Col = MdSalarios(SalariosTop);

 console.log({
     MedianaGeneralCol,
     MedianaTop10Col,
 });