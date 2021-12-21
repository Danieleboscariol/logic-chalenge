const lista = [1, 2, 3, 4]

function solucao(lista) {
    const cofre = lista.reduce((acc, item) => {
        return acc = acc + item
    })
    console.log(cofre)
  }

solucao(lista)

 //reduce pra somar todo mundo
 