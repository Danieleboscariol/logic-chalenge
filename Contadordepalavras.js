const texto = "               Cuidado, pois usuarios           as vezes deixam espacos vazios no       fim do texto sem querer"

function solucao(texto) {
    const NPalavras = texto.split(" ").filter(palavra => {
        if(palavra.length > 0){
            return true
        } else return false
    })
    console.log(NPalavras.length)
}


function solucao(texto) {
    const NPalavras = texto.split(" ").filter(palavra => palavra.length > 0)
    console.log(NPalavras.length)
}

solucao(texto)

//split pra ele cortar a string num array a cada espaço
//filter para verificar se não era um array vazio
