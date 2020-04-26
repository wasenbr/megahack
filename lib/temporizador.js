//@ts-check

const Ativos = require('./ativos');
const EventosAleatorios = require('./eventosAleatorios');

class Temporizador {

    constructor(jogo) {
        this.jogo = jogo;
        this.timer = setInterval(this.interval, 60000);
        this.controladorEventosAleatorios = new EventosAleatorios();
    }

    interval() {
        this.jogo.ativos.forEach(ativo => {
            ativo.processaPeriodo();
        });

        this.controladorEventosAleatorios.check();
    }
}

module.exports = Temporizador;