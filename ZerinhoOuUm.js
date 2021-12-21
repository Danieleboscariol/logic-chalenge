const jogadores = [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 1
    },
    {
      "nome": "Beach",
      "jogada": 1
    },
    {
      "nome": "Laurel",
      "jogada": 1
    },
    {
      "nome": "Beatrice",
      "jogada": 1
    },
    {
      "nome": "Alison",
      "jogada": 1
    },
    {
      "nome": "Saundra",
      "jogada": 1
    },
    {
      "nome": "Klein",
      "jogada": 1
    }
  ]

  function solucao(jogadores) {
    const jogada0 = jogadores.filter( x => x.jogada === 0);
    const jogada1 = jogadores.filter( x => x.jogada === 1);
    if(jogada0.length === 1){
        console.log(jogada0[0].nome)
    } else if(jogada1.length === 1){
        console.log(jogada1[0].nome)
    } else {
        console.log("NINGUEM")
    }
    
}


solucao(jogadores)


//filtrei quem jogou 0 e quem jogou 1
// depois verifiquei se no arrai continha apenas 1 item de numero zero ou de numero 1
//o que tivesse apenas 1 tem me retornava o nome do ganhador

