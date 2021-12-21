const min = 2
const max = 10
const valores = [0, 5, 6, 10, 11]




function solucao(min, max, valores) {
    let autorizados = []
    for(let valor of valores){
    if(valor >= min && valor <= max){
        autorizados.push(valor)
    }
  }
  console.log(autorizados)
}


solucao(min, max, valores)


//for of para percorrer o array
//para cada item dentro de valores
//item/valor tem que estar dentro do intervalo que vai ser
//passado como parametro
//push para guardar os novos itens numa nova variável