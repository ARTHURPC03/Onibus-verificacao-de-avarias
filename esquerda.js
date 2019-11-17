let valores = []

var clicado1 = false

function janela1(e) {
   e.preventDefault();
   
   var mapa = e.target;

   
    
       var coordenadas = mapa.getAttribute("coords");
       var coords_array = coordenadas.split(",");
       var coords_clip = '';
       
       for(let i in coords_array){
          if(i%2 == 0) coords_clip += coords_array[i]+"px "+coords_array[+i+1]+"px,"
       }
       
       coords_clip = coords_clip.substr(0, coords_clip.length-1);

        let span = document.createElement("span");
        span.className = "clip";
        span.setAttribute("onclick", "this.outerHTML=''");
        span.style = "clip-path: polygon("+coords_clip+");";

       document.getElementById("container").appendChild(span);
       
       if(!clicado1){
        valores.push('janela 1')
        clicado1 = true

    }else{
        valores.pop()
        clicado1 = false
        

    }
}

var clicado2 = false
function janela2(e) {
    e.preventDefault();
    
    var mapa = e.target;
 
     if(!clicado2){
         valores.push('janela 2')
         clicado2 = true
     }else{
         valores.pop()
         clicado2 = false
     }
     
        var coordenadas = mapa.getAttribute("coords");
        var coords_array = coordenadas.split(",");
        var coords_clip = '';
        
        for(let i in coords_array){
           if(i%2 == 0) coords_clip += coords_array[i]+"px "+coords_array[+i+1]+"px,"
        }
        
        coords_clip = coords_clip.substr(0, coords_clip.length-1);
 
         let span = document.createElement("span");
         span.className = "clip1";
         span.setAttribute("onclick", "this.outerHTML=''");
         span.style = "clip-path: polygon("+coords_clip+");";
 
        document.getElementById("container").appendChild(span);
       
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