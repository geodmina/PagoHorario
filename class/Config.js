class Config {

    constructor() {

        this.rutaArchivo = 'src/data.txt';

        this.laboral = ["MO", "TU", "WE", "TH", "FR"]

        this.finSemana = ["SA", "SU"]

        this.horarioLaboral = [
            {
                min: 1,
                max: 900,
                valor: 25
            }, {
                min: 900,
                max: 1800,
                valor: 15
            }, {
                min: 1800,
                max: 2400,
                valor: 2400
            }
        ]

        this.horarioFinSemana = [
            {
                min: 1,
                max: 900,
                valor: 30
            }, {
                min: 900,
                max: 1800,
                valor: 20
            }, {
                min: 1800,
                max: 2400,
                valor: 25
            }
        ]

    }

    getRuta() {
        return this.rutaArchivo;
    }
    getLaboral() {
        return this.laboral;
    }
    getFinSemana() {
        return this.finSemana;
    }

    getHorario(dia) {

        return this.laboral.includes(dia) ? this.horarioLaboral : this.horarioFinSemana;

    }

}
module.exports = Config;