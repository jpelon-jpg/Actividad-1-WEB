function procedimiento() {
    let cadena = document.getElementById("numeros").value;
    let arreglito = cadena.split(",");
    let arreglo = arreglito.map(Number);

    let maximo = Math.max(...arreglo);
    document.getElementById("resultado1").value = maximo;

    let minimo = Math.min(...arreglo);
    document.getElementById("resultado2").value = minimo;


    let suma = arreglo.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / arreglo.length;
    document.getElementById("resultado3").value = promedio;
}


document.querySelector(".formulario").addEventListener("submit", function(evento){
    evento.preventDefault();
    procedimiento();
});