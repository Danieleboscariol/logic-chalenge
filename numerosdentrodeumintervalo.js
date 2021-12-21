const numero = 10
const limiteInferior = 5
const limiteSuperior = 20 



function solucao(numero, limiteInferior, limiteSuperior) {
    if(numero >= limiteInferior && numero <= limiteSuperior && numero % 1 === 0 && limiteInferior <= limiteSuperior){
        console.log("PERTENCE")
    } else {
        console.log("NÃO PERTENCE")
    }

}

solucao(numero, limiteInferior, limiteSuperior)


//verificando intervalos
//numero % 1 === 0 >>>>> saber se é inteiro


