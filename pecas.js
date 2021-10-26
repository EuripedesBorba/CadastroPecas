
// Exercício encontro remoto UC8.

// Sistema cadastro de peças

// JavaScript
// Requisitos
// 1 – Se peça pesar mais de 100gm pode cadastrar
// 2 - Lista com Capacidade de até 10 peças (console.log( “não tem capacidade”)
// 3 – Peça tem que ter nome igual ou maior que 3 caracteres

// ("Cadastro de peças")


let peso = 99;

if (peso > 100) {
    console.log("A peça pode  ser cadastrada")
    } else {
        console.log("A peça não pode ser cadastrada")
    }

    let listadePecas = ["Radiador", " Retrovisor", " Velocimentro", " carburador", " Caixa de marcha", " Luz de freio", " Parabrisa", " Farol", " cabo freio de Mão", " amortecedor."];

    console.log("lista de peças = " + listadePecas)

    numeroDePecas = listadePecas.length
    console.log("Numero de peças máximo " + numeroDePecas)

    if(listadePecas.length < 10){
        console.log("A lista ainda tem espaço para mais pecas")
    } else {
        console.log("Não há espaço disponivel para listar")
    }
 
    let nomeDaPecas = "Ro"

    if (nomeDaPecas.length >= 3) {
        console.log("Pode ser cadastrada") 
    } else { 
            console.log("Peça não Pode ser cadastrada, nome da peça tem que ter mais que duas letras")
    }

       
      // XXX

  

 