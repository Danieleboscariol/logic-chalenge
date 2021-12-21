function solucao(a, b) {
    let maiorIntervalo = 0
    let maior = 0
    let menor = 0

    if(a>b) {
        maior = a
        menor = b
        maiorIntervalo = a
    } else {
        maior = b
        menor = a
        maiorIntervalo = b
    }

    while(maiorIntervalo/menor % 1 !== 0){
        maiorIntervalo += maior
    }
    console.log(maiorIntervalo)
}


solucao(12, 15)


//fiz o if/else p/ não ter diferença qual dos onibus tivesse
//o maior intervalo

//while para saber quantas vezes um intervalo cabe dentro do outro
//pegar o maior intervalo e dividir pelo menor, assim, fazer looping quanto o resto for diferente de zero
//pq quando o resto for zero, quer dizer que eles se encontraram


//mmc???