//@ts-check

class Ativo {
    constructor(initData) {
        this.jogo = initData.jogo;
        this.ticker = initData.ticker;
        this.preco = initData.preco;
        this.volatilidade = initData.volatilidade;
    }

    //calcula os valores do ativo ao completar um novo período 
    processaPeriodo() {
        //deve ser implementado nas classes filhas
    }
}

class RendaFixa extends Ativo {
    constructor(initData) {
        super(initData);
        this.taxaJuros = initData.taxaJuros;
        this.emissor = initData.emissor;
    }
}

class RendaRendaVariavel extends Ativo {
    constructor(initData) {
        super(initData);
        this.dividendos = initData.dividendos;
        this.periodoDividendos = initData.periodoDividendos;//distrinui dividendos a cada <periodoDividendos> periodos
    }
}

class Acao extends RendaRendaVariavel {
    constructor(initData) {
        super(initData);
        this.empresa = initData.empresa;
        this.setor = initData.setor;
    }
}

class FundoInvestimentoImoveis extends RendaRendaVariavel {
    constructor(initData) {
        super(initData);
        this.administrador = initData.administrador;
        this.setor = initData.setor;
    }
}

module.exports = { Ativo, RendaFixa, RendaRendaVariavel, Acao, FundoInvestimentoImoveis }