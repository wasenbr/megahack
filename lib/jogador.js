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
            console.log("Comprar Ativo: DEU CERTO");
        } else {
            console.log("Comprar Ativo: FALHOU");
        } 
    }

    recolherRendimento(id) {
        let element = this.jogo.rendimentosParaColetar.find(function(rc){return rc.id == id});
        if(element) {
            console.log("recolherRendimento: ", element.valor);
            this.caixa = this.caixa + element.valor;
            this.jogo.rendimentosParaColetar = this.jogo.rendimentosParaColetar.filter(function(rc){return rc.id != id});
        }
    }
    
}

module.exports = Jogador;