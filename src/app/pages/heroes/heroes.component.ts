import { Component,OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes: HeroeModel[] = [];
  cargando = false;
  

  constructor (private heroesService:HeroesService){}

  ngOnInit() {

   this.cargando = true;
   this.heroesService.getHeroes()
   .subscribe(resp=> {

    this.heroes = resp;
    this.cargando = false;
    
   });
    
  }

}
