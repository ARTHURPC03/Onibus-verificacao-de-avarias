function confirmar() {
var text = document.getElementById('text').value
var res = document.querySelector('div#res')

if(text == 0 ) {
    window.alert('Por favor preencha os dados e tente novamente!')
}else {
    var defeito = document.getElementsByName('defeito')
    var dft = ''
    if(defeito[0].checked){
        var dft = "arranhou"
    }
    if (defeito[1].checked) {
        var dft = "quebrou"
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos que a janela ${dft} e enviamos para a vistoria com a seguinte informação:${text}.`
    
}
}
