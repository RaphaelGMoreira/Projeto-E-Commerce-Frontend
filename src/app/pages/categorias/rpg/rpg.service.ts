import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rpg } from './rpg.model';

@Injectable({
    providedIn: 'root'
})

export class RpgService{
    constructor(private httpClient: HttpClient) {}

    retrieveALL(): Rpg[]{
        return RPG;
      }


}

var RPG: Rpg[] = [

    {
      id: 79,
      nome: 'Monster Hunter: World',
      preco: 50.00,
      plataforma: 'PS4',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/monsterhunterworld.jpg',
    },

    {
      id: 80,
      nome: 'Dark Souls',
      preco: 39.99,
      plataforma: 'PC',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/DarkSouls.jpg',
    },

    {
      id: 81,
      nome: 'Diablo III',
      preco: 89.99,
      plataforma: 'XBOX ONE',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/DiabloIIIcover.jpg',
    },

    {
      id: 82,
      nome: 'Star Wars: Knights of the Old Republic',
      preco: 99.99,
      plataforma: 'XBOX ONE',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Star Wars Knights of the Old Republic.jpg',
    },

    {
      id: 83,
      nome: 'The Legend of Zelda',
      preco: 9.99,
      plataforma: 'PC',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/The Legend of Zelda.jpg',
    },

    {
      id: 84,
      nome: 'Fallout',
      preco: 29.99,
      plataforma: 'PC',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Fallout.jpg',
    },

    {
      id: 85,
      nome: "Demon's Souls",
      preco: 79.99,
      plataforma: 'PC',
      categoria: 'RPG',
      imageUrl: "/assets/images/rpg/Demon's Souls.jpg",
    },

    {
      id: 86,
      nome: 'Final Fantasy VII Remake',
      preco: 3.99,
      plataforma: 'PS4',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Final Fantasy VII Remake.jpg',
    },

    {
      id: 87,
      nome: 'Dragon Quest XI: Echoes of an Elusive Age',
      preco: 20.99,
      plataforma: 'PS4',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Dragon Quest XI Echoes of an Elusive Age .jpg',
    },

    {
      id: 88,
      nome: 'Bloodborne',
      preco: 40.99,
      plataforma: 'XBOX ONE',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Bloodborne.jpg',
    },

    {
      id: 89,
      nome: 'Undertale',
      preco: 39.99,
      plataforma: 'PS4',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Undertale .jpg',
    },

    {
      id: 90,
      nome: 'Divinity: Original Sin II',
      preco: 82.99,
      plataforma: 'PS4',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Divinity Original Sin II.jpg',
    },

    {
      id: 91,
      nome: 'Persona 5 Royal',
      preco: 2.99,
      plataforma: 'PS4',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/Persona 5 Royal.jpg',
    },

    {
      id: 92,
      nome: 'The Elder Scrolls V: Skyrim',
      preco: 92.99,
      plataforma: 'PC',
      categoria: 'RPG',
      imageUrl: '/assets/images/rpg/The Elder Scrolls V Skyrim.jpg',
    }

  ];