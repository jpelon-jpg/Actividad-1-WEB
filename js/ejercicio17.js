function obtenerTareas() {
    let tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}

function guardarTareas(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

const manejarTareas = (function () {
    let tareas = obtenerTareas();

    function agregar(textoTarea) {
        let nuevaTarea = {
            texto: textoTarea,
            completada: false
        };
        tareas.push(nuevaTarea);
        guardarTareas(tareas);
        renderizarTareas(tareas);
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardarTareas(tareas);
        renderizarTareas(tareas);
    }

    return {
        agregar: agregar,
        eliminar: eliminar
    };
})();

function renderizarTareas(tareas) {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    if (tareas.length === 0) {
        let vacio = document.createElement("li");
        vacio.className = "lista-vacia";
        vacio.textContent = "No hay tareas pendientes";
        lista.appendChild(vacio);
        return;
    }

    tareas.forEach(function (tarea, indice) {
        let item = document.createElement("li");
        item.className = "item-tarea";

        let texto = document.createElement("span");
        texto.textContent = tarea.texto;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.type = "button";
        botonEliminar.className = "boton-eliminar";

        botonEliminar.addEventListener("click", function () {
            confirmarEliminacion(indice);
        });

        item.appendChild(texto);
        item.appendChild(botonEliminar);
        lista.appendChild(item);
    });
}

function confirmarEliminacion(indice) {
    Swal.fire({
        title: '¿Eliminar esta tarea?',
        text: "Esta acción no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then(function (resultado) {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            Swal.fire({
                icon: 'success',
                title: 'Tarea eliminada',
                timer: 1200,
                showConfirmButton: false
            });
        }
    });
}

document.querySelector(".formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();

    let campoTarea = document.getElementById("tarea");
    let texto = campoTarea.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Escribe una tarea antes de agregarla.'
        });
        return;
    }

    manejarTareas.agregar(texto);
    campoTarea.value = "";
});

renderizarTareas(obtenerTareas());