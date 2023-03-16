import { Component,OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  constructor (private heroesService:HeroesService){}

  ngOnInit(): void {
   this.heroesService.getHeroes()
   .subscribe(resp=> {
    console.log(resp)
   });
    
  }

}
