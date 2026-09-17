function conversion(){
    var peso = document.getElementById("pesos").value;

    if (peso.trim() == ""){
        alert("Rellene el campo para seguir");
        return;
    }
    
    if (isNaN(peso)){
        alert("La entrada no es válida");
        return
    }
    
    var dolar=18.18;

    var resultado = peso / dolar;

    document.getElementById("dolares").value = resultado.toFixed(5);
}

document.querySelector(".formulario").addEventListener("submit", function(evento){
    evento.preventDefault();
    conversion();
});