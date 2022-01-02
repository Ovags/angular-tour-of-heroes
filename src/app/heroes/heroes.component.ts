import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;

  onSelect(hero: Hero):void{
    this.selectedHero=hero;
  }


  heroes:Hero[]=[];

  getHeroes():void{
    this.heroes=this.heroService.getHeroes();
  }

}
