//@ts-check

class Jogador {

    constructor(jogo) {
        this.jogo = jogo;
        this.caixa = 1000;
        this.salario = 0;
        this.meusAtivos = [];
    }

}

module.exports = Jogador;