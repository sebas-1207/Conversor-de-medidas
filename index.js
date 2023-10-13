import { convertirKg, convertirMts, convertirCelsius } from './conversiones.js';

window.convertir = function () {
    let valor = parseFloat(document.getElementById('cantidad').value);
    document.getElementById('valor').innerHTML = "<b>" + valor + "</b>";

    let de = parseInt(document.getElementById('de').value);
    let a = parseInt(document.getElementById('a').value);

    let resultado = 0;

    switch (de) {
        case 1:
            switch (a) {
                case 1:
                    resultado = convertirKg(valor);
                    break;
                case 2:
                    resultado = "No se puede convertir de Kilogramos a Pies";
                    break;
                case 3:
                    resultado = "No se puede convertir de Kilogramos a Fahrenheit";
                    break;
            }
            break;
        case 2:
            switch (a) {
                case 1:
                    resultado = "No se puede convertir de Metros a Libras";
                    break;
                case 2:
                    resultado = convertirMts(valor);
                    break;
                case 3:
                    resultado = "No se puede convertir de Metros a Fahrenheit";
                    break;
            }
            break;
        case 3:
            switch (a) {
                case 1:
                    resultado = "No se puede convertir de Celsius a Libras";
                    break;
                case 2:
                    resultado = "No se puede convertir de Celsius a Pies";
                    break;
                case 3:
                    resultado = convertirCelsius(valor);
                    break;
            }
            break;
    }

    // Guardar los datos en el localStorage
    localStorage.setItem('valor', valor);
    localStorage.setItem('de', de);
    localStorage.setItem('a', a);
    localStorage.setItem('resultado', resultado);

    document.getElementById("resultado").innerHTML = "Resultado: " + (typeof resultado === "number" ? resultado.toFixed(2) : resultado);
}

window.onload = function () {
    if (localStorage.getItem('valor')) {
        document.getElementById('cantidad').value = localStorage.getItem('valor');
    }

    if (localStorage.getItem('de')) {
        document.getElementById('de').value = localStorage.getItem('de');
    }

    if (localStorage.getItem('a')) {
        document.getElementById('a').value = localStorage.getItem('a');
    }

    if (localStorage.getItem('resultado')) {
        document.getElementById('resultado').innerHTML = "Resultado: " + localStorage.getItem('resultado');
    }
}