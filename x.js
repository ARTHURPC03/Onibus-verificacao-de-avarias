let valores = []

var clicado1 = false

var imagem = document.createElement('img')
var resultado = document.querySelector('#res') 

function janela1() {
        
        
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

var img2 = document.createElement('img')
var res2 = document.querySelector('#res2')

function janela2() {
     
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

var img3 = document.createElement('img')
var res3 = document.querySelector('#res3')

function janela3(){
    
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
    if(clicado1 == true){
    resultado.removeChild(imagem)
    } // lembrar de adicionar o removeChield para cada função 
    if(clicado2 == true){
    res2.removeChild(img2)    
    }
    if(clicado3 == true){
    res3.removeChild(img3)  
    }
    
    
    
    clicado1 = false //lembrar de adicionar a varável  "clicado..." de cada função
    clicado2 = false 
    clicado3 = false 


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