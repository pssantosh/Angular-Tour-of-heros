import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params}    from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero }         from './../Model/Hero';
import { HeroService }  from './../services/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  private heroDetail: Hero;

  constructor(private heroService : HeroService,
              private route: ActivatedRoute,
              private location : Location) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHeroes(+params['id']))
      .subscribe(hero => this.heroDetail = hero);
  }

  goBack(){
    this.location.back();
  }

}
