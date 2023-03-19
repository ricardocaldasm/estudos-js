function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora <12) {
        img.src = 'morning-p.png' //229 209 184
        document.body.style.background = '#e5d1b8' //não funciona rgb nem background-color
    } else if (hora >=12 && hora<18) {
        img.src = 'afternoon-p.png' //197 234 243
        document.body.style.background = '#c5eaf3'
    } else {
        img.src = 'night-p.png' //64 79 86
        document.body.style.background = '#404f56'
    }
}
