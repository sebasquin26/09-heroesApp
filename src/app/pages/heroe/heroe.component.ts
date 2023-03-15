import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe = new HeroeModel();


  constructor () {}

  ngOnInit(){

  }

  guardar(form:NgForm){


if(form.invalid){
  console.log('formulario invalido')
  return;
}
    console.log(form);
    console.log(this.heroe);
  }
}
