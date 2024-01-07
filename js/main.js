const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

function guardarOperaciones (operacion) {

    var longitudLocalStorage = localStorage.length;

    if (longitudLocalStorage > 0) {

        var ultimaKey = localStorage.key(longitudLocalStorage - 1);

        localStorage.setItem(ultimaKey++ , operacion);

    } else {

        localStorage.setItem(0, operacion);

    }
};

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

            guardarOperaciones(pantalla.textContent);

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