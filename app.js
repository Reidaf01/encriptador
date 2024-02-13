function encriptar(){

    let textoUsuario = document.getElementById("textoUsuario").value;
    let mensaje = document.getElementById("mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
    
    let textoEncriptado = textoUsuario
                                        .replace(/e/gi, "enter")
                                        .replace(/i/gi, "imes")
                                        .replace(/a/gi, "ai")
                                        .replace(/o/gi, "ober")
                                        .replace(/u/gi, "ufat")

    if (textoUsuario.length !=0){
        textoUsuario = textoEncriptado;
        mensaje.textContent = "";
        imagen.style.display = "none";
        parrafo.textContent = textoEncriptado;    
        parrafo.style.color = "#0A3871";
        parrafo.style.fontSize = "25px";
        parrafo.style.fontFamily = "Inter", sans-serif;

        
    } else {
        imagen.style.display = "block";
        mensaje.innerHTML = "Ningún mensaje fue <br>encontrado"
        parrafo.innerHTML = "Ingresa el texto que deseas encriptar o <br>desencriptar"
        parrafo.style.color = "";
        parrafo.style.fontSize = "";
        alert("Debes ingresar algún texto")
    }
                                  
}

function desencriptar(){

    let textoUsuario = document.getElementById("textoUsuario").value;
    let textoEncriptado = textoUsuario
                                            .replace(/enter/gi, "e")
                                            .replace(/imes/gi, "i")
                                            .replace(/ai/gi, "a")
                                            .replace(/ober/gi, "o")
                                            .replace(/ufat/gi, "u")
    
         if (textoUsuario.length !=0){
        textoUsuario = textoEncriptado;
        mensaje.textContent = "";
        imagen.style.display = "none";
        parrafo.textContent = textoEncriptado;    
        parrafo.style.color = "#0A3871";
        parrafo.style.fontSize = "25px";
        parrafo.style.fontFamily = "Inter", sans-serif;
        
    } else {
        imagen.style.display = "block";
        mensaje.innerHTML = "Ningún mensaje fue <br>encontrado"
        parrafo.innerHTML = "Ingresa el texto que deseas encriptar o <br>desencriptar"
        parrafo.style.color = "";
        parrafo.style.fontSize = "";
        alert("Debes ingresar algún texto")                         
}
}


function copiar() {
    let parrafo = document.getElementById("parrafo");
    let textoEncriptado = parrafo.textContent;
    let textarea = document.createElement("textarea");
    textarea.value = textoEncriptado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Texto encriptado copiado al portapapeles.");
}
