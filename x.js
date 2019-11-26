let valores = []

var clicado1 = false

function janela1() {
       if(!clicado1){
        valores.push('janela 1')
        clicado1 = true
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src','frente.png')
        
    }else{
        valores.pop()
        clicado1 = false
        
        
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos as seguintes avarias:`
    res.appendChild(img)
}

var clicado2 = false
function janela2() {

     if(!clicado2){
         valores.push('janela 2')
         clicado2 = true
     }else{
         valores.pop()
         clicado2 = false
     }
}

function janela3(){
    valores.push('janela 3')
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
valores = valores.filter((este, i) => valores.indexOf(este) === i)
  
    let resultado = valores

 window.alert(`${resultado}.`)

    
}