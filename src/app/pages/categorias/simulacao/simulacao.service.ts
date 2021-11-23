import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Simulacao } from './simulacao.model';

@Injectable({
    providedIn: 'root'
})

export class SimulacaoService{
    constructor(private httpClient: HttpClient) {}

    retrieveALL(): Simulacao[]{
        return SIMULACAO;
      }


}

var SIMULACAO: Simulacao[] = [

    {
      id: 94,
      nome: 'Euro Truck Simulator 2',
      preco: 55.99,
      plataforma: 'PC',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/eurotrucksimulator2.jpg',
    },
    
    {
      id: 95,
      nome: 'Bee Simulator',
      preco: 9.99,
      plataforma: 'PC',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/Bee Simulator.jpg',
    },
    
    {
      id: 96,
      nome: 'Farming Simulator 19',
      preco: 19.99,
      plataforma: 'PS4',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/Farming Simulator 19.jpg',
    },
    
    {
      id: 97,
      nome: 'Flight Simulator',
      preco: 229.99,
      plataforma: 'PS4',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/Flight Simulator.jpg',
    },
    
    {
      id: 98,
      nome: 'Goat Simulator',
      preco: 89.99,
      plataforma: 'XBOX ONE',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/Goat Simulator.jpg',
    },
    
    {
      id: 99,
      nome: 'Gran Turismo Sport',
      preco: 89.99,
      plataforma: 'XBOX ONE',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/Gran Turismo Sport.jpg',
    },
    
    {
      id: 100,
      nome: 'Franquia SimCity',
      preco: 99.99,
      plataforma: 'PC',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/Franquia SimCity.jpg',
    },
    
    {
      id: 101,
      nome: 'Surgeon Simulator',
      preco: 9.99,
      plataforma: 'PC',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/Surgeon Simulator.jpg',
    },
    
    {
      id: 102,
      nome: 'The Sims 4',
      preco: 129.99,
      plataforma: 'PC',
      categoria: 'Simulação',
      imageUrl: '/assets/images/simulacao/The Sims 4.jpg',
    }

  ];