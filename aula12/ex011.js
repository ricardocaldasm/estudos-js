var idade = 64
if (idade<16) {
    console.log(`Não vota`) //seria document.write se estivesse dentro do nabegador. Como está no nodeJS, usamos console.log
} else if (idade < 18 || idade >=65) { //pode escrever: else { if(idade <18) { MENSAGEM }}
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
}