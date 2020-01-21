let valores = []

var clicado1 = false

var imagem = document.createElement('img')
var resultado = document.querySelector('#res') 

function porta1() {
        
        
        imagem.setAttribute('src','/imagensDIR/porta1.png')
        resultado.style.textAlign = 'left'
        resultado.innerHTML = ``
    if(!clicado1){
        valores.push('porta 1')
        clicado1 = true
        resultado.appendChild(imagem)
    }else{
        
        clicado1 = false
        
        var index = valores.indexOf('porta 1')
           if( index > -1){
           valores.splice(index,1)
           }
        
    }
}


var clicado2 = false

var img2 = document.createElement('img')
var res2 = document.querySelector('#res2')

function porta2() {
     
    img2.setAttribute('src','/imagensDIR/porta2.png')
    
    res2.style.textAlign = 'left'
    res2.innerHTML = ``

     if(!clicado2){
         valores.push('porta 2')
        clicado2 = true
        res2.appendChild(img2)
  
 

     }else{
         
         clicado2 = false
        
         var index2 = valores.indexOf('porta 2')
            if( index2 > -1){
            valores.splice(index2,1)
            }
        

     }

    
}


var clicado3 = false

var img3 = document.createElement('img')
var res3 = document.querySelector('#res3')

function porta3(){
    
    img3.setAttribute('src','/imagensDIR/porta3.png') 
    res3.style.textAlign = 'left'
    res3.innerHTML = ``

    if(!clicado3){
    valores.push('porta 3')
    clicado3 = true
    res3.appendChild(img3)
    
    }else{
    clicado3 = false
    
    var index3 = valores.indexOf('porta 3')
       if( index3 > -1){
       valores.splice(index3,1)
       }

        }
}

var clicado4 = false

var img4 = document.createElement('img')
var res4 = document.querySelector('#res4')

function janela1(){
    img4.setAttribute('src','/imagensDIR/janela1.png') 
    res4.style.textAlign = 'left'
    res4.innerHTML = ``

    if(!clicado4){
    valores.push('janela 1')
    clicado4 = true
    res4.appendChild(img4)
    
    }else{
    clicado4 = false
    
    var index4 = valores.indexOf('janela 1')
       if( index4 > -1){
       valores.splice(index4,1)
       }

        } 
}

var clicado5 = false

var img5 = document.createElement('img')
var res5 = document.querySelector('#res5')

function janela2(){
    img5.setAttribute('src','/imagensDIR/janela2.png') 
    res5.style.textAlign = 'left'
    res5.innerHTML = ``

    if(!clicado5){
    valores.push('janela 2')
    clicado5 = true
    res5.appendChild(img5)
    
    }else{
    clicado5 = false
    
    var index5 = valores.indexOf('janela 2')
       if( index5 > -1){
       valores.splice(index5,1)
       }

        }  
}

var clicado6 = false

var img6 = document.createElement('img')
var res6 = document.querySelector('#res6')

function janela3(){
    img6.setAttribute('src','/imagensDIR/janela3.png') 
    res6.style.textAlign = 'left'
    res6.innerHTML = ``

    if(!clicado6){
    valores.push('janela 3')
    clicado6 = true
    res6.appendChild(img6)
    
    }else{
    clicado6 = false
    
    var index6 = valores.indexOf('janela 3')
       if( index6 > -1){
       valores.splice(index6,1)
       }

        }  
}

var clicado7 = false

var img7 = document.createElement('img')
var res7 = document.querySelector('#res7')

function janela4(){

    img7.setAttribute('src','/imagensDIR/janela4.png') 
    res7.style.textAlign = 'left'
    res7.innerHTML = ``

    if(!clicado7){
    valores.push('janela 4')
    clicado7 = true
    res7.appendChild(img7)
    
    }else{
    clicado7 = false
    
    var index7 = valores.indexOf('janela 4')
       if( index7 > -1){
       valores.splice(index7,1)
       }

        }    
}


var clicado8 = false

var img8 = document.createElement('img')
var res8 = document.querySelector('#res8')

function janela5(){
    img8.setAttribute('src','/imagensDIR/janela5.png') 
    res8.style.textAlign = 'left'
    res8.innerHTML = ``

    if(!clicado8){
    valores.push('janela 5')
    clicado8 = true
    res8.appendChild(img8)
    
    }else{
    clicado8 = false
    
    var index8 = valores.indexOf('janela 5')
       if( index8 > -1){
       valores.splice(index8,1)
       }

        }
}

var clicado9 = false

var img9 = document.createElement('img')
var res9 = document.querySelector('#res9')

function frontal(){
    img9.setAttribute('src','/imagensDIR/frontal.png') 
    res9.style.textAlign = 'left'
    res9.innerHTML = ``

    if(!clicado9){
    valores.push('frontal')
    clicado9 = true
    res9.appendChild(img9)
    
    }else{
    clicado9 = false
    
    var index9 = valores.indexOf('frontal')
       if( index9 > -1){
       valores.splice(index9,1)
       }

        }
}

var clicado10 = false

var img10 = document.createElement('img')
var res10 = document.querySelector('#res10')

function superior(){
    img10.setAttribute('src','/imagensDIR/superior.png') 
    res10.style.textAlign = 'left'
    res10.innerHTML = ``

    if(!clicado10){
    valores.push('superior')
    clicado10 = true
    res10.appendChild(img10)
    
    }else{
    clicado10 = false
    
    var index10 = valores.indexOf('superior')
       if( index10 > -1){
       valores.splice(index10,1)
       }

        }
}

var clicado11 = false

var img11 = document.createElement('img')
var res11 = document.querySelector('#res11')

function lado1(){
    img11.setAttribute('src','/imagensDIR/lado1.png') 
    res11.style.textAlign = 'left'
    res11.innerHTML = ``

    if(!clicado11){
    valores.push('lado 1')
    clicado11 = true
    res11.appendChild(img11)
    
    }else{
    clicado11 = false
    
    var index11 = valores.indexOf('lado 1')
       if( index11 > -1){
       valores.splice(index11,1)
       }

        }
}

var clicado12 = false

var img12 = document.createElement('img')
var res12 = document.querySelector('#res12')

function lado2(){
    img12.setAttribute('src','/imagensDIR/lado2.png') 
    res12.style.textAlign = 'left'
    res12.innerHTML = ``

    if(!clicado12){
    valores.push('lado 2')
    clicado12 = true
    res12.appendChild(img12)
    
    }else{
    clicado12 = false
    
    var index12 = valores.indexOf('lado 2')
       if( index12 > -1){
       valores.splice(index12,1)
       }

        }
}

var clicado13 = false

var img13 = document.createElement('img')
var res13 = document.querySelector('#res13')

function lado3(){
    img13.setAttribute('src','/imagensDIR/lado3.png') 
    res13.style.textAlign = 'left'
    res13.innerHTML = ``

    if(!clicado13){
    valores.push('lado 3')
    clicado13 = true
    res13.appendChild(img13)
    
    }else{
    clicado13 = false
    
    var index13 = valores.indexOf('lado 3')
       if( index13 > -1){
       valores.splice(index13,1)
       }

        }
}

var clicado14 = false

var img14 = document.createElement('img')
var res14 = document.querySelector('#res14')

function traseira(){
    img14.setAttribute('src','/imagensDIR/traseira.png') 
    res14.style.textAlign = 'left'
    res14.innerHTML = ``

    if(!clicado14){
    valores.push('traseira')
    clicado14 = true
    res14.appendChild(img14)
    
    }else{
    clicado14 = false
    
    var index14 = valores.indexOf('traseira')
       if( index14 > -1){
       valores.splice(index14,1)
       }

        }
}

var clicado15 = false

var img15 = document.createElement('img')
var res15 = document.querySelector('#res15')

function rodaFrontal(){
    img15.setAttribute('src','/imagensDIR/rodaFrontal.png') 
    res15.style.textAlign = 'left'
    res15.innerHTML = ``

    if(!clicado15){
    valores.push('roda frontal')
    clicado15 = true
    res15.appendChild(img15)
    
    }else{
    clicado15 = false
    
    var index15 = valores.indexOf('roda frontal')
       if( index15 > -1){
       valores.splice(index15,1)
       }

        }
}

var clicado16 = false

var img16 = document.createElement('img')
var res16 = document.querySelector('#res16')

function rodaTraseira(){
    img16.setAttribute('src','/imagensDIR/rodaTraseira.png') 
    res16.style.textAlign = 'left'
    res16.innerHTML = ``

    if(!clicado16){
    valores.push('roda traseira')
    clicado16 = true
    res16.appendChild(img16)
    
    }else{
    clicado16 = false
    
    var index16 = valores.indexOf('roda traseira')
       if( index16 > -1){
       valores.splice(index16,1)
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
    if(clicado10 === true){
    res10.removeChild(img10)  
    }
    if(clicado11 === true){
    res11.removeChild(img11)  
    }
    if(clicado12 === true){
    res12.removeChild(img12)  
    }
    if(clicado13 === true){
    res13.removeChild(img13)  
    }
    if(clicado14 === true){
    res14.removeChild(img14)    
    }
    if(clicado15 === true){
    res15.removeChild(img15)  
    } 
    if(clicado16 === true){
    res16.removeChild(img16)    
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
    clicado10 = false
    clicado11 = false
    clicado12 = false
    clicado13 = false
    clicado14 = false 
    clicado15 = false 
    clicado16 = false
  
    


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