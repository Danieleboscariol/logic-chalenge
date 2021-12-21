const precos = [200, 150, 50, 100]

function solucao(precos) {
    let soma = precos.reduce((acc, item) => {
            return acc = acc + item
        })
    if(precos.length >=3){
    const menor = Math.min.apply(Math, precos)
    soma = soma - (menor/2)    
    }

    console.log(soma)
}  



  solucao(precos)



  // somar todos os itens do array
  // preços.lengtn pq era a partir de 3 itens
  //const menor - pra saber qual era o item de menor valor método procurado na internet
  //total de compras = soma - a divisão do menor por depois para dar o desconto