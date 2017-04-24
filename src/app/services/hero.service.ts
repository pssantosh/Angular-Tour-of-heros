import { Injectable } from '@angular/core';
import { Hero } from './../Model/Hero';
import { HEROES } from './../mock/mock-hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHerosList() : Promise<Hero[]>{
      return Promise.resolve(HEROES);
  }

  getHeroes(id: number) : Promise<Hero>{
      return this.getHerosList().then(heroes => heroes.find(heroes => heroes.id == id));
  }

}
