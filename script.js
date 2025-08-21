let operacion = prompt("Ingresa la operación que deseas realizar:\n1. suma\n2. resta\n3. multiplicacion\n4. division");

switch (operacion) {
    case "suma":
        alertCustom("Elegiste suma");
        break;
    case "resta":
        alertCustom("Elegiste resta");
        break;
    case "multiplicacion":
        alertCustom("Elegiste multiplicación");
        break;
    case "division":
        alertCustom("Elegiste división");
        break;
    default:
        alertCustom("No ingresaste ninguna operación válida");
        throw new Error("Operación inválida"); // Detiene el script
}

let primernumero = prompt("Ingresa el primer número para " + operacion);
let segundonumero = prompt("Ingresa el segundo número para " + operacion);

let uno = Number(primernumero);
let dos = Number(segundonumero);

let resultado;

if (operacion === "suma") {
    resultado = uno + dos;
} else if (operacion === "resta") {
    resultado = uno - dos;
} else if (operacion === "multiplicacion") {
    resultado = uno * dos;
} else if (operacion === "division") {
    resultado = uno / dos;
}

alertCustom("El resultado de " + operacion + " es: " + resultado);

function alertCustom(mensaje) {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.style.position = "fixed";
    alerta.style.top = "50%";
    alerta.style.left = "50%";
    alerta.style.transform = "translate(-50%, -50%)";
    alerta.style.backgroundColor = "#1e90ff";
    alerta.style.color = "white";
    alerta.style.padding = "20px 35px";
    alerta.style.borderRadius = "12px";
    alerta.style.boxShadow = "0px 8px 25px rgba(0,0,0,0.4)";
    alerta.style.fontFamily = "Arial, sans-serif";
    alerta.style.fontSize = "18px";
    alerta.style.zIndex = "1000";
    alerta.style.opacity = "0";
    alerta.style.transition = "opacity 0.5s, transform 0.5s";

    document.body.appendChild(alerta);

    setTimeout(() => {
        alerta.style.opacity = "1";
        alerta.style.transform = "translate(-50%, -50%) scale(1.1)";
    }, 10);

    setTimeout(() => {
        alerta.style.opacity = "0";
        alerta.style.transform = "translate(-50%, -50%) scale(0.9)";
        setTimeout(() => alerta.remove(), 500);
    }, 3000);
}
