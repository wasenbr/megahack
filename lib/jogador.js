//@ts-check
const Ativos = require('./ativos');

class Jogador {

    constructor(jogo) {
        this.jogo = jogo;
        this.caixa = 1000;
        this.salario = 0;
        this.meusAtivos = [];
    }

    comprarAtivo(ativo, valor) {
        let comprouAtivo = ativo.comprarAtivo(valor);

        if(comprouAtivo.validarCompra) {
            this.caixa = this.caixa - comprouAtivo.debitarCaixa;
            this.meusAtivos.push(comprouAtivo.ativo);
            console.log("comprou");
        } else {
            console.log("nao comprou");
        } 
    }
    
}

module.exports = Jogador;