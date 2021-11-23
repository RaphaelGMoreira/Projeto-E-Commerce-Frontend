import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Esportes } from './esportes.model';

@Injectable({
    providedIn: 'root'
})

export class EsportesService{
    constructor(private httpClient: HttpClient) {}

    retrieveALL(): Esportes[]{
        return ESPORTE;
      }


}

var ESPORTE: Esportes[] = [

    {
      id: 48,
      nome: 'Fifa 22',
      preco: 200.99,
      plataforma: 'Xbox One',
      categoria: 'Esportes',
      imageUrl: '/assets/images/esporte/fifa22.jpg',
    },

    {
      id: 49,
      nome: 'Fifa 21',
      preco: 99.99,
      plataforma: 'PS4',
      categoria: 'Esportes',
      imageUrl: '/assets/images/esporte/fifa-21-2.jpg',
    },

    {
      id: 50,
      nome: 'eFootball PES 21',
      preco: 109.99,
      plataforma: 'PC',
      categoria: 'Esportes',
      imageUrl: '/assets/images/esporte/eFootballPES21.jpg',
    },

    {
      id: 51,
      nome: 'PGA Tour 2K21',
      preco: 89.99,
      plataforma: 'XBOX ONE',
      categoria: 'Esportes',
      imageUrl: '/assets/images/esporte/PGATour 2K21.jpg',
    },

    {
      id: 52,
      nome: 'NBA 2K21',
      preco: 99.99,
      plataforma: 'PC',
      categoria: 'Esportes',
      imageUrl: '/assets/images/esporte/NBA2K21.jpg',
    },

    {
      id: 53,
      nome: "Tony Hawk's Pro Skater 1 + 2",
      preco: 69.99,
      plataforma: 'PS4',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/Tony Hawk's Pro Skater 1 + 2.jpg",
    },

    {
      id: 54,
      nome: "Steep",
      preco: 19.29,
      plataforma: 'XBOX ONE',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/Steep.jpg",
    },

    {
      id: 55,
      nome: "Jogos Olímpicos de Tokyo 2020 - O jogo oficial",
      preco: 39.00,
      plataforma: 'PC',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/Jogos Olímpicos de Tokyo 2020  O jogo oficial.jpg"
    },

    {
      id: 56,
      nome: "Tennis World Tour 2",
      preco: 100.00,
      plataforma: 'PC',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/Tennis World Tour 2.jpg"
    },

    {
      id: 57,
      nome: "Tour de France 2021",
      preco: 20.90,
      plataforma: 'XBOX ONE',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/Tour de France 2021.jpg"
    },

    {
      id: 58,
      nome: "UFC 4",
      preco: 116.90,
      plataforma: 'PS4',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/UFC 4.jpg"
    },

    {
      id: 59,
      nome: "NHL 21",
      preco: 130.90,
      plataforma: 'PS4',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/NHL 21.jpg"
    },

    {
      id: 60,
      nome: "Madden NFL 21",
      preco: 119.90,
      plataforma: 'PC',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/Madden NFL 21.jpg"
    },

    {
      id: 61,
      nome: "PES 2017",
      preco: 9.90,
      plataforma: 'PC',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/PES 2017.jpg"
    },

    {
      id: 62,
      nome: "Snow",
      preco: 1.99,
      plataforma: 'PC',
      categoria: 'Esportes',
      imageUrl: "/assets/images/esporte/Snow.jpg"
    }

  ];