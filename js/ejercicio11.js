function conversion(){
    var km = document.getElementById("kilometros").value;

    if (km.trim() == ""){
        alert("Rellene el campo para seguir");
        return;
    }
    
    if (isNaN(km)){
        alert("La entrada no es válida");
        return
    }
    
    var milla=0.621371;
    
    var resultado = km*milla;

    document.getElementById("millas").value = resultado.toFixed(5);
}

document.querySelector(".formulario").addEventListener("submit", function(evento){
    evento.preventDefault();
    conversion();
});
