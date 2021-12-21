function solucao(min, km) {
    let precoTempo = 0
    let precodistancia = 0
    if(min <= 20){
        precoTempo = min * 50
    } else {
        precoTempo = ((min - 20) * 30) + (20 * 50)
    }
    if(km <= 10){
        precodistancia = km * 70
    } else {
        precodistancia = ((km - 10) * 50) + (10 * 70)
    }
    console.log(precoTempo + precodistancia)
}


solucao(25, 11.5)

//dois ifs, um para o tempo e outro para km
//somar km + tempo
