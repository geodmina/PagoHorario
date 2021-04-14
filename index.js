const Config = require("./class/Config.js");
const fs = require('fs');
const readline = require('readline');

var configuracion = new Config();

async function procesaLinea() {

    const fileStream = fs.createReadStream(configuracion.getRuta());

    const readLine = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const linea of readLine) {
        calculaHorario(linea);
    }
}

procesaLinea();

function calculaHorario(trama) {

    let separaTrama = trama.split('=');
    let trabajador = separaTrama[0];

    let horario = separaTrama[1].split(',');

    let recibir = 0;

    horario.forEach(itemDia => {

        let dia = itemDia.substring(0, 2);

        let stringHoras = itemDia.substring(2, itemDia.length);
        let horario = configuracion.getHorario(dia);

        let valorP = validaRango(horario, stringHoras);
        recibir = recibir + valorP;

    })

    console.log(`El monto a pagar ${trabajador} es: ${recibir} USD`);

}

// INDENNTIFICAR A QUE RANGO PERTENECE LA HORA
function identificarRangoHora(horario, hora) {

    for (var i = 0; i < horario.length; i++) {
        if (hora >= horario[i].min && hora <= horario[i].max) {
            return i;
        }
    }

}

// VALIDAR EL RANGO DE HORAS DEL DIA
function validaRango(horario, stringHoras) {

    // SEPARAR HORAS DEL DIA
    let horas = stringHoras.split('-')

    // REEMPLAZAR LOS SEARADORES DE HORA
    let horaInicio = horas[0].replace(':', '');
    let horaFin = horas[1].replace(':', '');

    // FORMATEAR HORA 00:00
    if (horaInicio == '0000') {
        horaFin == '0001'
    }

    if (horaFin == '0000') {
        horaFin = '2400'
    }

    // OBTENER RANGO DE HORAS
    let rangoInicio = identificarRangoHora(horario, Number(horaInicio));
    let rangoFin = identificarRangoHora(horario, Number(horaFin));

    let pago = 0;

    // SI LA HORA DE INICIO Y DE FIN CORRESPONDN AL MISMO RANGO 
    // SE OBTIENE LA DIFERENCIA Y VALOR A PAGAR
    if (rangoInicio == rangoFin) {
        let tiempo = horaFin - horaInicio;
        pago = pago + calcularValorRango(tiempo, rangoInicio, horario);
    } else {

        // SI LA HORA DE INICIO Y FIN CUBREN VARIOS RANGOS
        // SE CALCULA LOS VALORES POR RANGOS
        let iRango = rangoInicio;
        for (let index = rangoInicio; index <= rangoFin; index++) {

            let tiempo = '';
            if (iRango == rangoInicio) {
                // RANGO INICIAL
                tiempo = horario[iRango].max - horaInicio;
            } else if (iRango == rangoFin) {
                // RANGOS COMPLETOS
                tiempo = horaFin - horario[iRango].min;
            } else {
                // RANGO FINAL
                tiempo = horario[iRango].max - horario[iRango].min;
            }

            // OBTENER EL VALOR POR EL RANGO
            pago = pago + calcularValorRango(tiempo, iRango, horario);
            iRango++;
        }

    }

    return pago;

}

// CALCULAR ELVALOR DEL RANGO
function calcularValorRango(stringTiempo, idRango, horario) {

    let tiempo = stringTiempo.toString().padStart(4, '0')

    let horas = Number(tiempo.substr(0, 2));
    let minutos = Number(tiempo.substr(2, 4));

    let totalHoras = horas + (minutos / 60)
    let valorHoras = totalHoras * horario[idRango].valor

    return valorHoras;
}