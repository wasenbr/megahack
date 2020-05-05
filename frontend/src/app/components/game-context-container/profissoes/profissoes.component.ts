import { Component, OnInit } from '@angular/core';

interface Profissao {
  nome: string,
  salarioMin: number,
  salarioMax: number,
  requesitos: string[]
}

@Component({
  selector: 'app-profissoes',
  templateUrl: './profissoes.component.html',
  styleUrls: ['./profissoes.component.scss']
})

export class ProfissoesComponent implements OnInit {

  profissoes: Profissao[] = [ 
    {
        nome: "Entregador",
        salarioMin: 800,
        salarioMax: 1200,
        requesitos: []
    },
    {
        nome: "Atendente de Lancheria",
        salarioMin: 600,
        salarioMax: 1200,
        requesitos: []
    },
    {
        nome: "Faxineiro",
        salarioMin: 500,
        salarioMax: 1400,
        requesitos: []
    },
    {
        nome: "Ajudante de Pedreiro",
        salarioMin: 800,
        salarioMax: 1000,
        requesitos: []
    },
    {
        nome: "Serviços Gerais",
        salarioMin: 800,
        salarioMax: 1200,
        requesitos: []
    },
    {
      nome: "Maquiador",
      salarioMin: 1100,
      salarioMax: 2000,
      requesitos: [
          "Atendimento ao publico",
          "Maquiagem"
      ]
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
