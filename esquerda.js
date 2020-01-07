let valores = []

var clicado1 = false

var imagem = document.createElement('img')
var resultado = document.querySelector('#res') 

function janela1() {
        
        
        imagem.setAttribute('src','janela1.png')
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

var img2 = document.createElement('img')
var res2 = document.querySelector('#res2')

function janela2() {
     
    img2.setAttribute('src','janela2.png')
    
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

var img3 = document.createElement('img')
var res3 = document.querySelector('#res3')

function janela3(){
    
    img3.setAttribute('src','janela3.png') 
    res3.style.textAlign = 'left'
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

var clicado4 = false

var img4 = document.createElement('img')
var res4 = document.querySelector('#res4')

function janela4(){
    img4.setAttribute('src','janela4.png') 
    res4.style.textAlign = 'left'
    res4.innerHTML = ``

    if(!clicado4){
    valores.push('janela 4')
    clicado4 = true
    res4.appendChild(img4)
    
    }else{
    clicado4 = false
    
    var index4 = valores.indexOf('janela 4')
       if( index4 > -1){
       valores.splice(index4,1)
       }

        } 
}

var clicado5 = false

var img5 = document.createElement('img')
var res5 = document.querySelector('#res5')

function janela5(){
    img5.setAttribute('src','janela5.png') 
    res5.style.textAlign = 'left'
    res5.innerHTML = ``

    if(!clicado5){
    valores.push('janela 5')
    clicado5 = true
    res5.appendChild(img5)
    
    }else{
    clicado5 = false
    
    var index5 = valores.indexOf('janela 5')
       if( index5 > -1){
       valores.splice(index5,1)
       }

        }  
}

var clicado6 = false

var img6 = document.createElement('img')
var res6 = document.querySelector('#res6')

function janela6(){
    img6.setAttribute('src','janela6.png') 
    res6.style.textAlign = 'left'
    res6.innerHTML = ``

    if(!clicado6){
    valores.push('janela 6')
    clicado6 = true
    res6.appendChild(img6)
    
    }else{
    clicado6 = false
    
    var index6 = valores.indexOf('janela 6')
       if( index6 > -1){
       valores.splice(index6,1)
       }

        }  
}

var clicado7 = false

var img7 = document.createElement('img')
var res7 = document.querySelector('#res7')

function janela7(){

    img7.setAttribute('src','janela7.png') 
    res7.style.textAlign = 'left'
    res7.innerHTML = ``

    if(!clicado7){
    valores.push('janela 7')
    clicado7 = true
    res7.appendChild(img7)
    
    }else{
    clicado7 = false
    
    var index7 = valores.indexOf('janela 7')
       if( index7 > -1){
       valores.splice(index7,1)
       }

        }    
}


var clicado8 = false

var img8 = document.createElement('img')
var res8 = document.querySelector('#res8')

function lado1(){
    img8.setAttribute('src','lado1.png') 
    res8.style.textAlign = 'left'
    res8.innerHTML = ``

    if(!clicado8){
    valores.push('lado 1')
    clicado8 = true
    res8.appendChild(img8)
    
    }else{
    clicado8 = false
    
    var index8 = valores.indexOf('lado 1')
       if( index8 > -1){
       valores.splice(index8,1)
       }

        }
}

var clicado9 = false

var img9 = document.createElement('img')
var res9 = document.querySelector('#res9')

function lado2(){
    img9.setAttribute('src','lado2.png') 
    res9.style.textAlign = 'left'
    res9.innerHTML = ``

    if(!clicado9){
    valores.push('lado 2')
    clicado9 = true
    res9.appendChild(img9)
    
    }else{
    clicado9 = false
    
    var index9 = valores.indexOf('lado 2')
       if( index9 > -1){
       valores.splice(index9,1)
       }

        }
}

var clicado10 = false

var img10 = document.createElement('img')
var res10 = document.querySelector('#res10')

function lado3(){
    img10.setAttribute('src','lado3.png') 
    res10.style.textAlign = 'left'
    res10.innerHTML = ``

    if(!clicado10){
    valores.push('lado 3')
    clicado10 = true
    res10.appendChild(img10)
    
    }else{
    clicado10 = false
    
    var index10 = valores.indexOf('lado 3')
       if( index10 > -1){
       valores.splice(index10,1)
       }

        }
}

var clicado11 = false

var img11 = document.createElement('img')
var res11 = document.querySelector('#res11')

function lado4(){
    img11.setAttribute('src','lado4.png') 
    res11.style.textAlign = 'left'
    res11.innerHTML = ``

    if(!clicado11){
    valores.push('lado 4')
    clicado11 = true
    res11.appendChild(img11)
    
    }else{
    clicado11 = false
    
    var index11 = valores.indexOf('lado 4')
       if( index11 > -1){
       valores.splice(index11,1)
       }

        }
}

var clicado12 = false

var img12 = document.createElement('img')
var res12 = document.querySelector('#res12')

function lado5(){
    img12.setAttribute('src','lado5.png') 
    res12.style.textAlign = 'left'
    res12.innerHTML = ``

    if(!clicado12){
    valores.push('lado 5')
    clicado12 = true
    res12.appendChild(img12)
    
    }else{
    clicado12 = false
    
    var index12 = valores.indexOf('lado 5')
       if( index12 > -1){
       valores.splice(index12,1)
       }

        }
}

var clicado13 = false

var img13 = document.createElement('img')
var res13 = document.querySelector('#res13')

function lado6(){
    img13.setAttribute('src','lado6.png') 
    res13.style.textAlign = 'left'
    res13.innerHTML = ``

    if(!clicado13){
    valores.push('lado 6')
    clicado13 = true
    res13.appendChild(img13)
    
    }else{
    clicado13 = false
    
    var index13 = valores.indexOf('lado 6')
       if( index13 > -1){
       valores.splice(index13,1)
       }

        }
}

var clicado14 = false

var img14 = document.createElement('img')
var res14 = document.querySelector('#res14')

function roda1(){
    img14.setAttribute('src','roda1.png') 
    res14.style.textAlign = 'left'
    res14.innerHTML = ``

    if(!clicado14){
    valores.push('roda 1')
    clicado14 = true
    res14.appendChild(img14)
    
    }else{
    clicado14 = false
    
    var index14 = valores.indexOf('roda 1')
       if( index14 > -1){
       valores.splice(index14,1)
       }

        }
}

var clicado15 = false

var img15 = document.createElement('img')
var res15 = document.querySelector('#res15')

function roda2(){
    img15.setAttribute('src','roda2.png') 
    res15.style.textAlign = 'left'
    res15.innerHTML = ``

    if(!clicado15){
    valores.push('roda 2')
    clicado15 = true
    res15.appendChild(img15)
    
    }else{
    clicado15 = false
    
    var index15 = valores.indexOf('roda 2')
       if( index15 > -1){
       valores.splice(index15,1)
       }

        }
}

var clicado16 = false

var img16 = document.createElement('img')
var res16 = document.querySelector('#res16')

function parabrisa(){
    img16.setAttribute('src','parabrisa.png') 
    res16.style.textAlign = 'left'
    res16.innerHTML = ``

    if(!clicado16){
    valores.push('parabrisa')
    clicado16 = true
    res16.appendChild(img16)
    
    }else{
    clicado16 = false
    
    var index16 = valores.indexOf('parabrisa')
       if( index16 > -1){
       valores.splice(index16,1)
       }

        }
}

var clicado17 = false

var img17 = document.createElement('img')
var res17 = document.querySelector('#res17')

function retrovisor(){
    img17.setAttribute('src','retrovisor.png') 
    res17.style.textAlign = 'left'
    res17.innerHTML = ``

    if(!clicado17){
    valores.push('retrovisor')
    clicado17 = true
    res17.appendChild(img17)
    
    }else{
    clicado17 = false
    
    var index17 = valores.indexOf('retrovisor')
       if( index17 > -1){
       valores.splice(index17,1)
       }

        }
}

var clicado18 = false

var img18 = document.createElement('img')
var res18 = document.querySelector('#res18')

function traseira(){
    img18.setAttribute('src','traseira.png') 
    res18.style.textAlign = 'left'
    res18.innerHTML = ``

    if(!clicado18){
    valores.push('traseira')
    clicado18 = true
    res18.appendChild(img18)
    
    }else{
    clicado18 = false
    
    var index18 = valores.indexOf('traseira')
       if( index18 > -1){
       valores.splice(index18,1)
       }

        }
}

var clicado19 = false

var img19 = document.createElement('img')
var res19 = document.querySelector('#res19')

function teto(){
    img19.setAttribute('src','teto.png') 
    res19.style.textAlign = 'left'
    res19.innerHTML = ``

    if(!clicado19){
    valores.push('teto')
    clicado19 = true
    res19.appendChild(img19)
    
    }else{
    clicado19 = false
    
    var index19 = valores.indexOf('teto')
       if( index19 > -1){
       valores.splice(index19,1)
       }

        }
}

var clicado20 = false

var img20 = document.createElement('img')
var res20 = document.querySelector('#res20')

function inferior2(){
    img20.setAttribute('src','inferior2.png') 
    res20.style.textAlign = 'left'
    res20.innerHTML = ``

    if(!clicado20){
    valores.push('inferior 2')
    clicado20 = true
    res20.appendChild(img20)
    
    }else{
    clicado20 = false
    
    var index20 = valores.indexOf('inferior 2')
       if( index20 > -1){
       valores.splice(index20,1)
       }

        }
}

var clicado21 = false

var img21 = document.createElement('img')
var res21 = document.querySelector('#res21')

function inferior3(){
    img21.setAttribute('src','inferior3.png') 
    res21.style.textAlign = 'left'
    res21.innerHTML = ``

    if(!clicado21){
    valores.push('inferior 3')
    clicado21 = true
    res21.appendChild(img21)
    
    }else{
    clicado21 = false
    
    var index21 = valores.indexOf('inferior 3')
       if( index21 > -1){
       valores.splice(index21,1)
       }

        }
}


var clicado22 = false

var img22 = document.createElement('img')
var res22 = document.querySelector('#res22')

function inferior1(){
    img22.setAttribute('src','inferior1.png') 
    res22.style.textAlign = 'left'
    res22.innerHTML = ``

    if(!clicado22){
    valores.push('inferior 1')
    clicado22 = true
    res22.appendChild(img22)
    
    }else{
    clicado22 = false
    
    var index22 = valores.indexOf('inferior 1')
       if( index22 > -1){
       valores.splice(index22,1)
       }

        }
}

var clicado23 = false

var img23 = document.createElement('img')
var res23 = document.querySelector('#res23')

function lado(){
    img23.setAttribute('src','lado.png') 
    res23.style.textAlign = 'left'
    res23.innerHTML = ``

    if(!clicado23){
    valores.push('lado')
    clicado23 = true
    res23.appendChild(img23)
    
    }else{
    clicado23 = false
    
    var index23 = valores.indexOf('lado')
       if( index23 > -1){
       valores.splice(index23,1)
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
    if(clicado17 === true){
    res17.removeChild(img17)  
    }
    if(clicado18 === true){
    res18.removeChild(img18)  
    }
    if(clicado19 === true){
    res19.removeChild(img19)  
    }
    if(clicado20 === true){
    res20.removeChild(img20)  
    }
    if(clicado21 === true){
    res21.removeChild(img21)  
    }
    if(clicado22 === true){
    res22.removeChild(img22)  
    }
    if(clicado23 === true){
    res23.removeChild(img23)  
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
    clicado17 = false 
    clicado18 = false
    clicado19 = false 
    clicado20 = false
    clicado21 = false
    clicado22 = false
    clicado23 = false
    


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