const cartaParaCima = "Q"

function solucao(carta) {
   if(cartaParaCima === "Q"){
       console.log("J")
   } else if(cartaParaCima === "J"){
       console.log("K")
   } else if(cartaParaCima === "K"){
       console.log("A")
   } else if(cartaParaCima === "A"){
       console.log("2")
   } else if(cartaParaCima === "2"){
       console.log("3")
   } else {
       console.log("Q")
   }
}

solucao(cartaParaCima)
