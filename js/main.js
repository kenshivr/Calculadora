const botones = document.querySelectorAll(".btn");
const pantalla = document.querySelector(".pantalla");
const botonMode = document.getElementById("botonMode");
const etiquetasI = document.querySelectorAll(".iconMode");
const changeButton = document.getElementById("changeMode");
const calculadora = document.querySelector(".calculadora");
const viewHistorial = document.querySelector(".viewHistorial");
const saveHistorial = document.querySelector(".saveHistorial");

// Variable para rastrear el estado del historial
let historialAbierto = false;

viewHistorial.addEventListener("click", () => {
    // Verificar el estado actual del historial
    if (!historialAbierto) {
        // Abrir el historial
        viewHistorial.classList.add('estiloHistorial');

        var historialHTML = '<ul><li>Historial de operaciones</li>';

        // Obtener las claves del localStorage
        var keys = Object.keys(localStorage).map(Number).sort(function(a, b) {
            return a - b;
        });

        // Iterar sobre las claves ordenadas y agregar elementos a historialHTML
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i].toString();
            var value = localStorage.getItem(key);
            historialHTML += '<li><i class="iHistorial">' + key + '</i><i class="iHistorial">' + value + '</i></li>';
        }

        historialHTML += '</ul>';
        viewHistorial.innerHTML = historialHTML;

        // Cambiar el estado a abierto
        historialAbierto = true;
    } else {
        // Cerrar el historial
        viewHistorial.classList.remove('estiloHistorial');
        viewHistorial.innerHTML = 'View Historial';

        // Cambiar el estado a cerrado
        historialAbierto = false;
    }
});

if (changeButton) {
    changeButton.addEventListener("click", function() {

        changeMode = !changeMode;

        botonMode.style.left = changeMode ? "45px" : "15px";
        pantalla.style.color = changeMode ? "rgb(54, 50, 50)" : "white";
        botonMode.style.backgroundColor = changeMode ? "rgb(54, 50, 50)" : "white" ;
        viewHistorial.style.color = changeMode ? "rgb(54, 50, 50)" : "white";
        saveHistorial.style.color = changeMode ? "rgb(54, 50, 50)" : "white";
        calculadora.style.backgroundColor = changeMode ? "white" : "rgb(54, 50, 50)";
        changeButton.style.backgroundColor = changeMode ? "white" : "rgb(54, 50, 50)";
        viewHistorial.style.backgroundColor = changeMode ? "white" : "rgb(54, 50, 50)";
        saveHistorial.style.backgroundColor = changeMode ? "white" : "rgb(54, 50, 50)";
        document.body.style.backgroundColor = changeMode ? "rgb(54, 50, 50)" : "#c9ccd5";
        etiquetasI.forEach(etiqueta => {
            etiqueta.style.color = changeMode ? "rgb(54, 50, 50)" : "white";
        });
    });
} else {
    console.error("No se encontro el boton con el ID 'changeMode' ");
}

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

    })
})