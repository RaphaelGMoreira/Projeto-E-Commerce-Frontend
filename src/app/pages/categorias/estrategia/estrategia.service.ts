import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estrategia } from './estrategia.model';

@Injectable({
    providedIn: 'root'
})

export class EstrategiaService{
    constructor(private httpClient: HttpClient) {}

    retrieveALL(): Estrategia[]{
        return ESPORTE;
      }


}

var ESPORTE: Estrategia[] = [

    {
      id: 63,
      nome: 'Civilization VI',
      preco: 250.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/civilizationvi.jpg',
    },

    {
      id: 64,
      nome: 'Age of Empires II',
      preco: 50.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Age of Empires II.jpg',
    },

    {
      id: 65,
      nome: 'Sid Meier’s Civilization V',
      preco: 59.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Civilization V.jpg',
    },

    {
      id: 66,
      nome: 'Company of Heroes 2',
      preco: 79.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Company of Heroes 2.jpg',
    },

    {
      id: 67,
      nome: 'Age of Mythology',
      preco: 39.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Age of Mythology.jpg',
    },

    {
      id: 68,
      nome: 'Total War: Warhammer II',
      preco: 9.99,
      plataforma: 'PS4',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Total War Warhammer II.jpg',
    },

    {
      id: 69,
      nome: 'Europa Universalis IV',
      preco: 29.99,
      plataforma: 'XBOX ONE',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Europa Universalis IV.jpg',
    },

    {
      id: 70,
      nome: 'Crusader Kings II',
      preco: 19.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Crusader_Kings_II_box_art.jpg',
    },

    {
      id: 71,
      nome: 'Stellaris',
      preco: 1.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Stellaris.jpg',
    },

    {
      id: 72,
      nome: 'Mount and Blade: Warband',
      preco: 51.99,
      plataforma: 'PS4',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Mount and Blade Warband.jpg',
    },

    {
      id: 73,
      nome: 'Into the Breach',
      preco: 1.99,
      plataforma: 'XBOX ONE',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Into the Breach.jpg',
    },

    {
      id: 74,
      nome: 'FTL: Faster Than Light',
      preco: 2.99,
      plataforma: 'XBOX ONE',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/FTL_Faster_Than_Light_Logo.jpg',
    },

    {
      id: 75,
      nome: 'Invisible Inc',
      preco: 4.99,
      plataforma: 'PS4',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Invisible Inc.jpg',
    },

    {
      id: 76,
      nome: 'Sins of a Solar Empire',
      preco: 3.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Sins of a Solar Empire.jpg',
    },

    {
      id: 77,
      nome: 'Plague Inc',
      preco: 1.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Plague Inc.jpg',
    },

    {
      id: 78,
      nome: 'Mini Metro',
      preco: 0.99,
      plataforma: 'PC',
      categoria: 'Estrategia',
      imageUrl: '/assets/images/estrategia/Mini Metro.jpg',
    }


  ];