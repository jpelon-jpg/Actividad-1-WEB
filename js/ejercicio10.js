function conversion(){
    var c = document.getElementById("celcius").value;

    if (c.trim() == ""){
        alert("Rellene el campo para seguir");
        return;
    }
    
    if (isNaN(c)){
        alert("La entrada no es válida");
        return
    }
    
    var resultado = (c*9/5)+32;

    document.getElementById("farenheit").value = resultado.toFixed(2);
}

document.querySelector(".formulario").addEventListener("submit", function(evento){
    evento.preventDefault();
    conversion();
});