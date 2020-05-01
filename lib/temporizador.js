//@ts-check

const Ativos = require('./ativos');
const EventosAleatorios = require('./eventosAleatorios');

class Temporizador {

    constructor(jogo) {
        this.jogo = jogo;
        this.timer = setInterval(this.interval.bind(this), 5000);
        this.controladorEventosAleatorios = new EventosAleatorios();
        this.rendimentoLastId = 0;
    }

    interval() {
        
        this.jogo.jogador.meusAtivos.forEach(ativo => {
            this.rendimentoLastId++;
            this.jogo.rendimentosParaColetar.push(ativo.processaPeriodo(this.rendimentoLastId));
            this.jogo.jogador.recolherRendimento(this.rendimentoLastId);
        });
        
        this.jogo.rendimentosParaColetar = this.jogo.rendimentosParaColetar.filter(function(rc){return rc;});

        this.controladorEventosAleatorios.check();
    
    }
}

module.exports = Temporizador;