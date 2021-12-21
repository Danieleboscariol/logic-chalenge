// Álvaro está economizando para viajar para a europa. 
// Todo dia ele coloca mais dinheiro no seu cofre. 
// A quantidade de dinheiro que ele coloca no cofre a 
// cada dia está registrada no array lista. 
// Faça um programa que calcule quanto Álvaro vem 
// acumulando, em média, por dia.
// Input Format
// A entrada é uma lista que contém quanto Álvaro guarda no cofre a cada dia.
// Constraints
// A lista tem de 0 a 1000 itens.
// Output Format
// Imprima na tela o quanto Álvaro vem acumulando, em média, por dia.

const lista = [2, 3, 4]
function solucao(lista) {
    let dinheiroSomado = 0
    for(let numero in lista) {
        dinheiroSomado += lista[numero]
    }
    console.log(dinheiroSomado/lista.length)
  }

  solucao(lista)


//for p/ somar todos os itens do array
//peguei a soma e dividi pela quantidade de itens do array