//@ts-check

class Ativo {
    constructor(initData) {
        this.jogo = initData.jogo;
        this.id = initData.id;
    }

    //calcula os valores do ativo ao completar um novo período 
    processaPeriodo() {
        //deve ser implementado nas classes filhas
    }
}

class RendaFixa extends Ativo {
    constructor(initData) {
        super(initData);
        this.investimentoMinimo = initData.investimentoMinimo;
        this.emissor = initData.emissor;
        this.taxaJuros = initData.taxaJuros;
        this.liquidez = initData.liquidez;
        this.risco = initData.risco;
    }
}

class RendaRendaVariavel extends Ativo {
    constructor(initData) {
        super(initData);
        this.ticker = initData.ticker;
        this.preco = initData.preco;
        this.volatilidade = initData.volatilidade;
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