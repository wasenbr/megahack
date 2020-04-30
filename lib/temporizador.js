//@ts-check

const Ativos = require('./ativos');
const EventosAleatorios = require('./eventosAleatorios');

class Temporizador {

    constructor(jogo) {
        this.jogo = jogo;
        this.timer = setInterval(this.interval.bind(this), 5000);
        this.controladorEventosAleatorios = new EventosAleatorios();
    }

    interval() {
        this.jogo.jogador.meusAtivos.forEach(ativo => {
            this.jogo.rendimentosParaColetar.push(ativo.processaPeriodo());
        });

        this.controladorEventosAleatorios.check();
        
        console.log("Rendimentos para coletar: ", this.jogo.rendimentosParaColetar)

    }
}

module.exports = Temporizador;