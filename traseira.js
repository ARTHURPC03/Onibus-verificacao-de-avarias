let valores = []

var clicado1 = false

var imagem = document.createElement('img')
var resultado = document.querySelector('#res') 

function traseira1() {
        
        
        imagem.setAttribute('src','/imagensTraseira/traseira1.png')
        resultado.style.textAlign = 'left'
        resultado.innerHTML = ``
    if(!clicado1){
        valores.push('traseira 1')
        clicado1 = true
        resultado.appendChild(imagem)
    }else{
        
        clicado1 = false
        
        var index = valores.indexOf('traseira 1')
           if( index > -1){
           valores.splice(index,1)
           }
        
    }
}


var clicado2 = false

var img2 = document.createElement('img')
var res2 = document.querySelector('#res2')

function traseira2() {
     
    img2.setAttribute('src','/imagensTraseira/traseira2.png')
    
    res2.style.textAlign = 'left'
    res2.innerHTML = ``

     if(!clicado2){
         valores.push('traseira 2')
        clicado2 = true
        res2.appendChild(img2)
  
 

     }else{
         
         clicado2 = false
        
         var index2 = valores.indexOf('traseira 2')
            if( index2 > -1){
            valores.splice(index2,1)
            }
        

     }

    
}


var clicado3 = false

var img3 = document.createElement('img')
var res3 = document.querySelector('#res3')

function traseiraEsq(){
    
    img3.setAttribute('src','/imagensTraseira/traseiraEsq.png') 
    res3.style.textAlign = 'left'
    res3.innerHTML = ``

    if(!clicado3){
    valores.push('traseira esquerda')
    clicado3 = true
    res3.appendChild(img3)
    
    }else{
    clicado3 = false
    
    var index3 = valores.indexOf('traseira esquerda')
       if( index3 > -1){
       valores.splice(index3,1)
       }

        }
}

var clicado4 = false

var img4 = document.createElement('img')
var res4 = document.querySelector('#res4')

function traseiraDir(){
    img4.setAttribute('src','/imagensTraseira/traseiraDir.png') 
    res4.style.textAlign = 'left'
    res4.innerHTML = ``

    if(!clicado4){
    valores.push('traseira direita')
    clicado4 = true
    res4.appendChild(img4)
    
    }else{
    clicado4 = false
    
    var index4 = valores.indexOf('traseira direita')
       if( index4 > -1){
       valores.splice(index4,1)
       }

        } 
}

var clicado5 = false

var img5 = document.createElement('img')
var res5 = document.querySelector('#res5')

function farolEsq(){
    img5.setAttribute('src','/imagensTraseira/farolEsq.png') 
    res5.style.textAlign = 'left'
    res5.innerHTML = ``

    if(!clicado5){
    valores.push('farol esquerdo')
    clicado5 = true
    res5.appendChild(img5)
    
    }else{
    clicado5 = false
    
    var index5 = valores.indexOf('farol esquerdo')
       if( index5 > -1){
       valores.splice(index5,1)
       }

        }  
}

var clicado6 = false

var img6 = document.createElement('img')
var res6 = document.querySelector('#res6')

function farolDir(){
    img6.setAttribute('src','/imagensTraseira/farolDir.png') 
    res6.style.textAlign = 'left'
    res6.innerHTML = ``

    if(!clicado6){
    valores.push('farol direito')
    clicado6 = true
    res6.appendChild(img6)
    
    }else{
    clicado6 = false
    
    var index6 = valores.indexOf('farol direito')
       if( index6 > -1){
       valores.splice(index6,1)
       }

        }  
}

var clicado7 = false

var img7 = document.createElement('img')
var res7 = document.querySelector('#res7')

function traseira3(){

    img7.setAttribute('src','/imagensTraseira/traseira3.png') 
    res7.style.textAlign = 'left'
    res7.innerHTML = ``

    if(!clicado7){
    valores.push('traseira 3')
    clicado7 = true
    res7.appendChild(img7)
    
    }else{
    clicado7 = false
    
    var index7 = valores.indexOf('traseira 3')
       if( index7 > -1){
       valores.splice(index7,1)
       }

        }    
}


var clicado8 = false

var img8 = document.createElement('img')
var res8 = document.querySelector('#res8')

function traseira4(){
    img8.setAttribute('src','/imagensTraseira/traseira4.png') 
    res8.style.textAlign = 'left'
    res8.innerHTML = ``

    if(!clicado8){
    valores.push('traseira 4')
    clicado8 = true
    res8.appendChild(img8)
    
    }else{
    clicado8 = false
    
    var index8 = valores.indexOf('traseira 4')
       if( index8 > -1){
       valores.splice(index8,1)
       }

        }
}

var clicado9 = false

var img9 = document.createElement('img')
var res9 = document.querySelector('#res9')

function retrovisorDir(){
    img9.setAttribute('src','/imagensTraseira/retrovisorDir.png') 
    res9.style.textAlign = 'left'
    res9.innerHTML = ``

    if(!clicado9){
    valores.push('retrovisor direito')
    clicado9 = true
    res9.appendChild(img9)
    
    }else{
    clicado9 = false
    
    var index9 = valores.indexOf('retrovisor direito')
       if( index9 > -1){
       valores.splice(index9,1)
       }

        }
}



function limpar(){
    if(clicado1 === true){
    resultado.removeChild(imagem)
    } 
    if(clicado2 === true){
    res2.removeChild(img2)    
    }
    if(clicado3 === true){
    res3.removeChild(img3)  
    }
    if(clicado4 === true){
    res4.removeChild(img4)    
    }
    if(clicado5 === true){
    res5.removeChild(img5)  
    } 
    if(clicado6 === true){
    res6.removeChild(img6)    
    }
    if(clicado7 === true){
    res7.removeChild(img7)  
    }
    if(clicado8 === true){
    res8.removeChild(img8)  
    }
    if(clicado9 === true){
    res9.removeChild(img9)  
    }
 
    
    
    
    clicado1 = false 
    clicado2 = false 
    clicado3 = false
    clicado4 = false 
    clicado5 = false
    clicado6 = false 
    clicado7 = false
    clicado8 = false
    clicado9 = false
   
    


    valores.length = 0
}

function continuar(){
    if(valores.length > 1){
        window.alert(`Detectamos avarias nas seguintes partes: 👉🏻${valores}`)    
    }
    if(valores.length == 1){
        window.alert(`Uma avaria foi detectada na seguinte parte: 👉🏻${valores}`)
    }   
    if(valores.length == 0){
        window.alert(`Nenhuma avaria foi detectada! Por favor preencha os dados e tente novamente!`)
    }

}