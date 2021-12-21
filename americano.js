const numeros = [4, 5, 5]



function solucao(numeros) {
    const soma = numeros.reduce((acc, item) =>{
        return acc + item
    })
    if(soma < numeros.length)
    console.log(soma)
    else {
        const resto = soma % numeros.length
        console.log(resto === 0 ? numeros.length : resto)
    }
}


solucao(numeros)


//14/3 = 4 resto 2 = a posição
//4 cabe 3x completas dentro de 14, o resto é a posição da pessoa
//se resto === 0 retorna o proprio comprimento do array, pq cabe x vezes inteiras 