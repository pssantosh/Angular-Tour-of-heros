import { Component, OnInit } from '@angular/core';
import { Hero } from './../Model/Hero';
import { HeroService } from './../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes : Hero[];

  constructor(private _heroService : HeroService) { }

  ngOnInit() {
    this._heroService.getHerosList().then(heros => this.heroes = heros.slice(1, 5));
  }

}
