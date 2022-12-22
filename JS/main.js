// Conversor de Moneda a Dolar y Euro

let respuesta = prompt('Bienvenido, ¿Desea realizar alguna conversion? Si la respuesta es si escriba Si, si la respuesta es no escriba No');

function confirmacionRespuesta (respuesta) {
    if (respuesta.toLowerCase () === "si"){
        let conversion = convertirA ();
        let valor = indicarValor ();
        let valorConvertido = convertirDivisa (valor, conversion);

        alert(`Su resultado es ${valorConvertido}`);
        alert("Muchas gracias.")
    } else {
        alert("Ha elegido \"No\", hasta luego.");
    }
}

function convertirA () {
    let monedaAConvertir = prompt('¿A que moneda desea convertir? (Dolares o Euros)');
    let precioDolares = 180;
    let precioEuros = 190;
    let result;

    switch (monedaAConvertir) {
        case 'Dolares':
            result = precioDolares;
            break;
        case 'Euros':
            result = precioEuros;
            break;
        default:
            break;

    }
    return result;
}

function indicarValor () {
    let valor = parseInt(prompt('Ingrese el valor a convertir'));
    return validarValor(valor);
}

function validarValor (valor) {
    while (Number.isNaN(valor) || valor === 0) {
        if (valor !==0) {
            alert('Ingrese un valor.')
        } else {
            alert('El valor no puede ser 0.')
        }
        valor = parseInt(prompt('Ingrese valor a convertir'));
    }
    
    return valor;
}

function convertirDivisa (valor, conversion) {

    let resultadoConversion = valor * conversion;

    console.log(resultadoConversion);
    
    return resultadoConversion;
}

confirmacionRespuesta(respuesta);