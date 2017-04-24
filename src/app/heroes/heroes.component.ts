import { Component, OnInit }    from '@angular/core';
import { Router }                from '@angular/router'

import { Hero }                 from './../Model/Hero';
import { HeroDetailComponent }  from './../hero-detail/hero-detail.component';
import { HeroService }          from './../services/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero : Hero;
  private heroes;

  constructor(private _heroService : HeroService,
              private router : Router) { }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  };

  ngOnInit(){
    this.getHeroes();
  }

  getHeroes() : void {
    this._heroService.getHerosList().then(heroes => this.heroes = heroes);
  }

  gotoDetail() : void{
      this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
