let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombre").value.trim();
    let calificacion = document.getElementById("calificacion").value;

    if (nombre === "" || calificacion.trim() === "") {
        alert("Complete ambos campos");
        return;
    }

    if (isNaN(calificacion)) {
        alert("La calificación debe ser un número válido");
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: Number(calificacion)
    };
    estudiantes.push(estudiante);

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("Agregue al menos un estudiante antes de calcular");
        return;
    }

    let suma = estudiantes.reduce((total, e) => total + e.calificacion, 0);
    let promedio = suma / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMaximo = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMinimo = estudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("masAlta").value = estudianteMaximo.nombre;
    document.getElementById("masBaja").value = estudianteMinimo.nombre;
}

document.getElementById("btnAgregar").addEventListener("click", function () {
    agregarEstudiante();
});

document.querySelector(".formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();
    calcular();
});