function solucao(lista) {
    const menor = lista.reduce((acc, item) => {
        if(item < acc && item >= 18){
            return item
        } 
        return acc
    },Infinity)

    if(menor === Infinity){
        console.log("CRESÇA E APAREÇA")
    } else {
        console.log(menor)
    }
    
  }



  solucao([12, 13, 11])



