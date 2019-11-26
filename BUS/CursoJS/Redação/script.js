    var video = document.getElementById("newvideo");

    video.src="video-maxi.mp4";

    video.onmouseover=function(){
      video.volume=1;
      console.log('mouseover')
    } // Ativar som com MouseOver

    video.onmouseout=function(){
      video.volume=0;
      console.log('mouseout');
    } // Desativar som MouseOut
    function mostrar() {
        document.getElementById("newvideo").style.visibility = "visible";
      };
      
      setTimeout("mostrar()", 5000);
 