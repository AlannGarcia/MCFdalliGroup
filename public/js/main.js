function zoomIn(img) {
    // Div que contendrá la imagen ampliada
    var zoomDiv = document.createElement("div");
    zoomDiv.style.position = "fixed";
    zoomDiv.style.top = "0";
    zoomDiv.style.left = "0";
    zoomDiv.style.width = "100%";
    zoomDiv.style.height = "100%";
    zoomDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    zoomDiv.style.display = "flex";
    zoomDiv.style.justifyContent = "center";
    zoomDiv.style.alignItems = "center";
    zoomDiv.style.zIndex = "10";
  
    // Crea una imagen en el elemento div con la misma fuente que la imagen original
    var zoomImg = document.createElement("img");
    zoomImg.src = img.src;
    zoomImg.style.maxWidth = "90%";
    zoomImg.style.maxHeight = "90%";
    
  
    // Agrega un botón de cierre dentro del elemento div
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "30px";
    closeButton.style.right = "10%";
    closeButton.style.fontSize = "40px";
    closeButton.style.color = "#fff";
    closeButton.style.backgroundColor = "transparent";
    closeButton.style.border = "none";
    zoomDiv.appendChild(closeButton);
  
    // Agrega la imagen y el botón al elemento div y el elemento div al cuerpo de la página
    zoomDiv.appendChild(zoomImg);
    document.body.appendChild(zoomDiv);
  
    // Elimina la imagen ampliada cuando se hace clic en el botón de cierre
    closeButton.onclick = function() {
      document.body.removeChild(zoomDiv);
    };
  
    // Elimina la imagen ampliada cuando se hace clic fuera de la imagen
    zoomDiv.onclick = function(event) {
      if (event.target === zoomDiv) {
        document.body.removeChild(zoomDiv);
      }
    };
  }
  