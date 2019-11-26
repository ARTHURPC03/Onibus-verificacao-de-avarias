let valores = []

var clicado1 = false

function janela1() {
        var imagem = document.createElement('img')
        var resultado = document.querySelector('#res') 
        imagem.setAttribute('src','Janela1.png')
        resultado.style.textAlign = 'left'
        resultado.innerHTML = ``
    if(!clicado1){
        valores.push('janela 1')
        clicado1 = true
        resultado.appendChild(imagem)
        
    }else{
        
        clicado1 = false
        
        var index = valores.indexOf('janela 1')
           if( index > -1){
           valores.splice(index,1)
           }
        
    }
    
    
  
}

var clicado2 = false
function janela2() {
     var img2 = document.createElement('img')
    img2.setAttribute('src','Traseira.png')
    
    res2.style.textAlign = 'left'
    res2.innerHTML = ``

     if(!clicado2){
         valores.push('janela 2')
        clicado2 = true
        res2.appendChild(img2)
  
 

     }else{
         
         clicado2 = false
        
         var index2 = valores.indexOf('janela 2')
            if( index2 > -1){
            valores.splice(index2,1)
            }
        

     }

    
}

var clicado3 = false
function janela3(){
    var img3 = document.createElement('img')
     img3.setAttribute('src','Direita.png') 
    res3.style.textAlign = 'center'
    res3.innerHTML = ``

    if(!clicado3){
    valores.push('janela 3')
    clicado3 = true
    res3.appendChild(img3)
    
    }else{
    clicado3 = false
    
    var index3 = valores.indexOf('janela 3')
       if( index3 > -1){
       valores.splice(index3,1)
       }

}
    
    
    


}
function janela4(){
    valores.push('janela 4')  
}
function janela5(){
    valores.push('janela 5')  
}
function janela6(){

    valores.push('janela 6')  
}
function janela7(){

    valores.push('janela 7')   
}

function lado1(){
    valores.push('lado 1')
}

function limpar(){
   
    valores.length = 0
    
    clicado1 = false 

}

function continuar(){
//valores = valores.filter((este, i) => valores.indexOf(este) === i)
  
    //let resultado = valores

 //window.alert(`${resultado}.`)
if(valores.length > 1){
window.alert(`Detectamos avarias nas seguintes partes: ${valores}`)    
}
if(valores.length == 1){
window.alert(`Uma avaria foi detectada na seguinte parte: ${valores}`)
}

if(valores.length == 0){
    window.alert(`Nenhuma avaria foi detectada! Por favor preencha os dados e preencha novamente!`)
    }

}