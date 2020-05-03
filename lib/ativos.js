//@ts-check

class Ativo {
    constructor(initData) {
        this.id = initData.id;
    }

    //calcula os valores do ativo ao completar um novo período 
    processaPeriodo() {
        //deve ser implementado nas classes filhas
    }

    comprarAtivo(param) {
         //deve ser implementado nas classes filhas
    } 
}

class RendaFixa extends Ativo {
    constructor(initData) {
        super(initData);
        this.valorAplicado = initData.valorAplicado;
        this.investimentoMinimo = initData.investimentoMinimo;
        this.emissor = initData.emissor;
        this.taxaJuros = initData.taxaJuros;
        this.liquidez = initData.liquidez;
        this.risco = initData.risco;
    }

    processaPeriodo(){
        return {origem: this, valor: this.valorAplicado * this.taxaJuros};
    }

    comprarAtivo(param) { // param é o valor que será comprado
        let ret = {validarCompra: false, debitarCaixa: 0, ativo: this};
        if(param >= this.investimentoMinimo) {
            this.valorAplicado = param;
            ret.validarCompra = true;
            ret.debitarCaixa = param;
        }
        return ret;
    }


}

class RendaVariavel extends Ativo {
    constructor(initData) {
        super(initData);
        this.nomeEmpresa = initData.nomeEmpresa;
        this.ticker = initData.ticker;
        this.preco = initData.preco;
        this.tipo = initData.tipo;
        this.percVolatilidade = initData.percVolatilidade;
        this.percDividendos = initData.percDividendos;
        this.freqDividendos = initData.freqDividendos;
        this.setor = initData.setor;
    }

    comprarAtivo(param) { // param é o valor que será comprado
        // let ret = {validarCompra: false, debitarCaixa: 0, ativo: this};
        // let qtdAcoes = param/this.preco;
        // if(param >= this.investimentoMinimo) {
        //     this.valorAplicado = param;
        //     ret.validarCompra = true;
        //     ret.debitarCaixa = param;
        // }
        // return ret;
    }

}

class Acao extends RendaVariavel {
    constructor(initData) {
        super(initData);

    }
}

class FundoInvestimentoImoveis extends RendaVariavel {
    constructor(initData) {
        super(initData);
        this.administrador = initData.administrador;
    }
}

module.exports = { Ativo, RendaFixa, RendaVariavel, Acao, FundoInvestimentoImoveis }