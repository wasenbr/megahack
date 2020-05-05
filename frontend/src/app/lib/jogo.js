const TemporizadorClass = require("./temporizador");
const Jogador = require("./jogador");
const Ativos = require('./ativos');
let ListaRendaFixa = require('./listasAtivos/rendaFixa.json');
let ListaRendaVariavel = require('./listasAtivos/rendaVariavel.json');

class Jogo {

    constructor() {
        
        this.__ativos = this.criarAtivos();
        this.__habilidades = [];
        this.__trabalhos = [];
        this.__temporizador = new TemporizadorClass(this);
        
        this.rendimentosParaColetar = [];
        this.jogador = new Jogador(this);

        this.jogador.comprarAtivo(this.__ativos[0], 150); 
        this.jogador.comprarAtivo(this.__ativos[3], 100); 
        
    }



    criarAtivos() {

        let contId = 0;
        let ret = [];

        ListaRendaFixa.forEach(function(rf){
            rf.id = ++contId;
            rf.valorAplicado = 0;
            ret.push(new Ativos.RendaFixa(rf));
        }.bind(this));

        ListaRendaVariavel.forEach(function(rv){
            rv.id = ++contId;
            rv.quantidade = 0;
            ret.push(new Ativos.RendaVariavel(rv));
        }.bind(this));

        return ret;

    }



    vendeAtivo() {

    }

    get caixa() {
        return this.jogador.caixa;
    }

    set caixa(valor) {
        this.jogador.caixa += valor;
    }

    get ativos() {
        return this.__ativos;
    }
}

module.exports = Jogo;