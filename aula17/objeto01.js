let amigo = {nome: 'José', sexo:'M', peso: 85.4,engordar(p){
    console.log('Engordou')
    this.peso += p
}} //no JS arrey é objeto e objeto é objeto
amigo.engordar(2)
console.log(amigo.peso) //amigo.nome mostra só o nome