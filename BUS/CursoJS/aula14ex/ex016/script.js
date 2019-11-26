function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
   
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')

    } else {
     res.innerHTML = 'contando: <br> '   
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
        
        if(p<=0){
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
    
        if (i<f){
          //Contagem crescente
            for(var c = i; c <= f; c += p)
        res.innerHTML += `${c} \u{1F449}`
        } else {
            //Contagem regressiva
            for(var c=i;c>=f;c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    
    }
    res.innerHTML += `\u{1F3C1}`


}
