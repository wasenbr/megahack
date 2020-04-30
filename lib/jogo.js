const TemporizadorClass = require("./temporizador");
const Jogador = require("./jogador");
const Ativos = require('./ativos');
let ListaRendaFixa = require('./listasAtivos/rendaFixa.json');

class Jogo {

    constructor() {

        this.__ativos = this.criarAtivos();
        this.__habilidades = [];
        this.__trabalhos = [];
        this.__temporizador = new TemporizadorClass(this);
        this.__jogador = new Jogador(this);

    }

    criarAtivos() {

        let contId = 0;
        ListaRendaFixa.forEach(function(rf){
            rf.id = contId++;
            this.ativos.push(new Ativos.RendaFixa(rf));
        });
        
    }

    compraAtivo(ativo) {

    }

    vendeAtivo() {

    }

    get caixa() {
        return this.__jogador.caixa;
    }

    set caixa(valor) {
        this.__jogador.caixa += valor;
    }

    get ativos() {
        return this.__ativos;
    }
}

module.exports = Jogo;