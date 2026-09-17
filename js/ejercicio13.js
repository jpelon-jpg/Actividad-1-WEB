function verificar(){
    var edad = document.getElementById("edad").value;

    if (edad.trim() == ""){
        alert("Rellene el campo para seguir");
        return;
    }
    
    if (isNaN(edad)){
        alert("La entrada no es válida");
        return
    }
    
    if (edad<18){
        document.getElementById("resultado").value = "No puedes votar";
    }else{
        document.getElementById("resultado").value = "Puedes votar";
    }
    
}

document.querySelector(".formulario").addEventListener("submit", function(evento){
    evento.preventDefault();
    verificar();
});