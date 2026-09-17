const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (numero1.trim() === "" || numero2.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor ingrese ambos números.'
        });
        return;
    }

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Ambos campos deben contener números válidos.'
        });
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = sumar(numero1, numero2);
            break;
        case "resta":
            resultado = restar(numero1, numero2);
            break;
        case "multiplicacion":
            resultado = multiplicar(numero1, numero2);
            break;
        case "division":
            resultado = dividir(numero1, numero2);
            break;
    }

    if (resultado === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'División por cero',
            text: 'No se puede dividir entre cero.'
        });
        return;
    }

    document.getElementById("resultado").value = resultado;
};

document.getElementById("btnSumar").addEventListener("click", () => calcularOperacion("suma"));
document.getElementById("btnRestar").addEventListener("click", () => calcularOperacion("resta"));
document.getElementById("btnMultiplicar").addEventListener("click", () => calcularOperacion("multiplicacion"));
document.getElementById("btnDividir").addEventListener("click", () => calcularOperacion("division"));