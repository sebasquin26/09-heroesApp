import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe = new HeroeModel();


  constructor (private heroesService:HeroesService) {}

  ngOnInit(){

  }

  guardar(form:NgForm){


if(form.invalid){
  console.log('formulario invalido')
  return;
}

Swal.fire({
  title: 'Espere',
  text: 'Guardando información',
  icon: 'info',
  allowOutsideClick: false,
  showConfirmButton: false,
  didOpen: () => {
    
  }
});


let peticion: Observable<any>;


if (this.heroe.id){

  peticion=this.heroesService.actualizarHeroe
  (this.heroe);
 
  
}else{


  peticion=this.heroesService.crearHeroe(this.heroe);
}
peticion.subscribe(resp =>{

  Swal.fire({
    title: this.heroe.nombre,
    text: 'Se actualizo correctamente',
    icon:'success'
  });

});

  }
}
