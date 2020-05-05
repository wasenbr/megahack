class Ativo {
    constructor(initData) {
        this.id = initData.id;
        this.cicloAtual = 0;
        this.cicloPagar = 5;
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
        this.cicloPagar = 1;
    }

    processaPeriodo(idpp){
        this.cicloAtual = this.cicloAtual + 1;
        if(this.cicloAtual >= this.cicloPagar) {
            this.cicloAtual = 0;
            return {id: idpp, origem: this, valor: this.valorAplicado * this.taxaJuros};
        }
        return false;
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
        this.qtdAcoes = 0;
        this.cicloPagar = 5;
    }

    comprarAtivo(param) { // param é o valor que será comprado
        let ret = {validarCompra: false, debitarCaixa: 0, ativo: this};
        this.qtdAcoes = Math.trunc(param/this.preco);

        if(this.qtdAcoes > 0) {
            this.valorAplicado = this.qtdAcoes * this.preco;
            ret.validarCompra = true;
            ret.debitarCaixa = this.qtdAcoes * this.preco;
        }
        return ret;
    }

    processaPeriodo(idpp){
        this.cicloAtual = this.cicloAtual + 1;
        if(this.cicloAtual >= this.cicloPagar) {
            this.cicloAtual = 0;
            return {id: idpp, origem: this, valor: this.qtdAcoes * this.percDividendos};
        }
        return false;
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