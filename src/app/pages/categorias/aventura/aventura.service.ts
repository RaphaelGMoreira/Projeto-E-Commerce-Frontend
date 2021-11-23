import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aventura } from './aventura.model';

@Injectable({
    providedIn: 'root'
})

export class AventuraService{
    constructor(private httpClient: HttpClient) {}

    retrieveALL(): Aventura[]{
        return AVENTURA;
      }


}

var AVENTURA: Aventura[] = [

    {
      id: 16,
      nome: 'Tomb Raider Under World',
      preco: 34.99,
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/TombRaiderUnderWorld.jpg',
    },

    {
      id: 17,
      nome: 'God of War',
      preco: 159.99,
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/GodofWar.jpg',
    },

    {
      id: 18,
      nome: 'The Last of Us Remastered',
      preco: 59.99,
      plataforma: 'Playstation 4',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/TheLastofUsRemastered.jpg',
    },

    {
      id: 19,
      nome: 'Death Stranding',
      preco: 89.99,
      plataforma: 'XBOX ONE',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/death-stranding-jogo-cke.jpg',
    },

    {
      id: 20,
      nome: 'The Resident Evil 3: Nemesis',
      preco: 29.99,
      plataforma: 'PC',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/resident_evil_3_remake___wallpaper_by_frankalcantara_dczqlzf-pre.jpg',
    },

    {
      id: 21,
      nome: 'Final Fantasy VII Remake',
      preco: 79.99,
      plataforma: 'PC',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/Final_Fantasy_VII_Remake_capa.jpg',
    },

    {
      id: 21,
      nome: 'Dark Souls 3',
      preco: 119.99,
      plataforma: 'XBOX ONE',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/DarkSouls3.jpg',
    },

    {
      id: 22,
      nome: 'Bloodborne',
      preco: 129.99,
      plataforma: 'PS4',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/Bloodborne_capa.jpg',
    },

    {
      id: 23,
      nome: 'The Last Guardian',
      preco: 19.99,
      plataforma: 'PC',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/TheLastGuardian.jpg',
    },

    {
      id: 24,
      nome: 'Uncharted 4: A Thief’s End',
      preco: 239.99,
      plataforma: 'PS4',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/Uncharted4AThiefsEnd.jpg',
    },

    {
      id: 25,
      nome: 'Battlefield 1',
      preco: 139.99,
      plataforma: 'PC',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/Battlefield1.jpg',
    },

    {
      id: 26,
      nome: 'Doom',
      preco: 129.99,
      plataforma: 'PC',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/doom.jpg',
    },

    {
      id: 27,
      nome: 'Destiny 2',
      preco: 189.99,
      plataforma: 'PS4',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/Destiny_2_capa.jpg',
    },

    {
      id: 28,
      nome: 'Fallout 4',
      preco: 79.99,
      plataforma: 'XBOX ONE',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/Fallout4.jpg',
    },

    {
      id: 29,
      nome: 'Titanfall 2',
      preco: 59.99,
      plataforma: 'PC',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/Titanfall2.jpg',
    },

    {
      id: 30,
      nome: 'The Resident Evil 7',
      preco: 99.99,
      plataforma: 'XBOX ONE',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/TheResidentEvil7.jpg',
    },

    {
      id: 31,
      nome: 'Until Dawn',
      preco: 199.99,
      plataforma: 'PS4',
      categoria: 'Aventura',
      imageUrl: '/assets/images/aventura/UntilDawn.jpg',
    }

  ];