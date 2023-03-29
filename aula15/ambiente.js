let num = [5, 8, 9, 1]
num [4] = 6 //cria uma posição 4 com valor 6
num.push(2) //cria automático mais um elemento, decide que o índice é 5 e coloca o valor 2
num.sort() //coloca em ordem crescente

console.log(num)
console.log(num.length)
let pos = num.indexOf(5) //mostra a posição do 5 || -1 se não for encontrado
console.log(pos)