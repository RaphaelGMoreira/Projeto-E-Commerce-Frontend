import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from './corrida.model';

@Injectable({
    providedIn: 'root'
})

export class CorridaService{
    constructor(private httpClient: HttpClient) {}

    retrieveALL(): Corrida[]{
        return CORRIDA;
      }


}

var CORRIDA: Corrida[] = [

    {
      id: 32,
      nome: 'Forza Horizon 4',
      preco: 45.99,
      plataforma: 'Playstation 4',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/forzahorizon4.jpg',
    },

    {
      id: 33,
      nome: 'Forza: Motorsport 7',
      preco: 132.99,
      plataforma: 'Playstation 4',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/ForzaMotorsport7.jpg',
    },

    {
      id: 34,
      nome: 'Project CARS 2',
      preco: 132.99,
      plataforma: 'PC',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/ProjectCARS2.jpg',
    },

    {
      id: 35,
      nome: 'Dirt Rally 2.0',
      preco: 19.99,
      plataforma: 'PC',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/DirtRally2.0.jpg',
    },

    {
      id: 36,
      nome: 'IRacing',
      preco: 9.99,
      plataforma: 'PC',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/IRacing.jpg',
    },

    {
      id: 37,
      nome: 'F1 2020',
      preco: 99.99,
      plataforma: 'XBOX ONE',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/F12020.jpg',
    },

    {
      id: 38,
      nome: 'The Crew 2',
      preco: 59.99,
      plataforma: 'XBOX ONE',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/TheCrew2.jpg',
    },

    {
      id: 39,
      nome: 'RFator 2',
      preco: 63.99,
      plataforma: 'PC',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/RFator 2.jpg',
    },

    {
      id: 40,
      nome: 'Need For Speed Most Wanted',
      preco: 25.99,
      plataforma: 'PS4',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/NeedForSpeedMostWanted.jpg',
    },

    {
      id: 41,
      nome: 'Need For Speed Most Wanted',
      preco: 13.99,
      plataforma: 'PS4',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/NeedForSpeedMostWanted.jpg',
    },

    {
      id: 42,
      nome: 'Burnout Paradise Remastered',
      preco: 16.99,
      plataforma: 'XBOX ONE',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/BurnoutParadiseRemastered.jpg',
    },

    {
      id: 43,
      nome: 'TrackMania2',
      preco: 10.99,
      plataforma: 'PC',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/TrackMania2.jpg',
    },

    {
      id: 44,
      nome: 'Need For Speed: Hot Pursuit',
      preco: 12.99,
      plataforma: 'XBOX ONE',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/NeedForSpeedHotPursuit.jpg',
    },

    {
      id: 45,
      nome: 'Grand Prix 3',
      preco: 18.99,
      plataforma: 'PS4',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/BurnoutParadiseRemastered.jpg',
    },

    {
      id: 46,
      nome: 'Burnout Paradise Remastered',
      preco: 53.99,
      plataforma: 'XBOX ONE',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/GrandPrix3.jpg',
    },

    {
      id: 47,
      nome: 'GRID Autosport',
      preco: 23.99,
      plataforma: 'PC',
      categoria: 'Corrida',
      imageUrl: '/assets/images/corrida/GRIDAutosport.jpg',
    }

  ];