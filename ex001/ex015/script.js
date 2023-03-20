function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') //ou document.querySelector(div#res)
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto') //não entendi setAttribute
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','malebaby-p.png')
            } else if (idade < 18) {
                img.setAttribute('src','maleteenager-p.png')
            } else if (idade < 65) {
                img.setAttribute('src','maleadult-p.png')
            } else {
                img.setAttribute('src','maleeldery-p.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','femalebaby-p.png')
            } else if (idade < 18) {
                img.setAttribute('src','femaleteenager-p.png')
            } else if (idade < 65) {
                img.setAttribute('src','femaleadult-p.png')
            } else {
                img.setAttribute('src','femaleeldery-p.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adiciona elemento
    }
}

