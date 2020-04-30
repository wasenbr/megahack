//@ts-check

class Jogador {

    constructor(jogo) {
        this.jogo = jogo;
        this.caixa = 1000;
        this.salario = 0;
        this.meusAtivos = [];
    }

    comprarAtivo(idAtivo, valor, qtd = null) {

        let at = this.jogo.__ativos.find(function(ja){return ja.id == idAtivo});

        if(valor >= at.investimentoMinimo){ 
            at.valorAplicado = valor;
            this.meusAtivos.push(at);
            return true;
        }
        return false;

    }

}

module.exports = Jogador;