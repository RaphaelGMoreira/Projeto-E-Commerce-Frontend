import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acao } from "./acao.model";

@Injectable({
    providedIn: 'root'
})

export class AcaoService{
    constructor(private httpClient: HttpClient) {}

    retrieveALL(): Acao[]{
        return ACAO;
      }


}

var ACAO: Acao[] = [

    {
      id: 1,
      nome: 'GTA V',
      preco: 30.99,
      plataforma: 'PC',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/gtav.jpg',
    },

    {
      id: 2,
      nome: 'Assassin’s Creed Valhalla',
      preco: 223.16,
      plataforma: 'PS4',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/assassinscreedvalhalla.jpg',
    },

    {
      id: 3,
      nome: 'The Last of Us Parte 2',
      preco: 99.90,
      plataforma: 'PS4',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/thelastofus2.jpg',
    },

    {
      id: 4,
      nome: 'Ori and the Will of the Wisps',
      preco: 339.99,
      plataforma: 'XBOX ONE',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/oriandthewillofthewisps.jpg',
    },

    {
      id: 5,
      nome: 'Ghost of Tsushima',
      preco: 159.90,
      plataforma: 'PC',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/ghostoftsushima.jpg',
    },

    {
      id: 6,
      nome: 'Hades',
      preco: 59.90,
      plataforma: 'PC',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/Hades.jpg',
    },

    {
      id: 7,
      nome: 'It Takes Two',
      preco: 47.90,
      plataforma: 'PS4',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/ittakestwo.jpg',
    },

    {
      id: 8,
      nome: 'Back 4 Blood',
      preco: 159.99,
      plataforma: 'XBOX ONE',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/Back4Blood2.jpg',
    },

    {
      id: 9,
      nome: 'Death Loop',
      preco: 189.99,
      plataforma: 'PC',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/DeathLoop.jpg',
    },

    {
      id: 10,
      nome: 'Red Dead Redemption 2',
      preco: 149.99,
      plataforma: 'PS4',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/RedDeadRedemption2.jpg',
    },

    {
      id: 11,
      nome: 'Batman: Arkham Knight',
      preco: 49.99,
      plataforma: 'PC',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/BatmanArkhamKnight.jpg',
    },

    {
      id: 12,
      nome: 'The Order: 1886',
      preco: 29.99,
      plataforma: 'PS4',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/TheOrder1886.jpg',
    },

    {
      id: 13,
      nome: 'Marvel’s Spider-Man',
      preco: 199.99,
      plataforma: 'XBOX ONE',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/MarvelsSpiderMan.jpg',
    },

    {
      id: 14,
      nome: 'The Witcher 3: Wild Hunt',
      preco: 259.99,
      plataforma: 'PS4',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/TheWitcher3WildHunt.jpg',
    },

    {
      id: 15,
      nome: 'Gears of War 5',
      preco: 249.99,
      plataforma: 'PC',
      categoria: 'Ação',
      imageUrl: '/assets/images/acao/gears5.jpg',
    }
   
  ];