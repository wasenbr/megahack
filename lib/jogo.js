//@ts-check

const TemporizadorClass = require("./temporizador");
const Ativos = require('./ativos');

class Jogo {
    constructor() {
        this.__caixa = 1000;
        this.__salario = 0;
        this.__ativos = [];
        this.__habilidades = [];
        this.__trabalho = "";
        this.__temporizador = new TemporizadorClass(this);
    }

    compraAtivo(ativo) {

    }

    vendeAtivo() {

    }

    get caixa() {
        return this.__caixa;
    }

    set caixa(valor) {
        this.__caixa += valor;
    }

    get ativos() {
        return this.__ativos;
    }
}

module.exports = Jogo;