import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock_heros';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  hero: Hero = {
    id: 1,
    name: 'Hero Tran Thai Quyen',
  };
  heroes: Hero[] = [];
  constructor(
    private router: Router,
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  onSelect(hero: Hero): void {
    this.router.navigateByUrl(`/detail/${hero.id}`);
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
