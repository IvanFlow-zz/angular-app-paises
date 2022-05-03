import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})

export class PorPaisComponent {
  
  termino: string= '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  
  constructor(private paisService: PaisService) { }
  
  buscar(termino: string){
    console.log(termino);
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(termino)
    // .subscribe( resp => {
    //   console.log(resp);
    // }, (err) => {
    //   console.info(err);
    //   this.hayError = true;
    // })
    .subscribe({
      next: (resp) => {
        console.log(resp);
        this.paises = resp;
      },
      error: (err) => {
        console.info(err);
        this.hayError = true;
        this.paises = [];
    }});
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
    .subscribe(paises =>
      this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos =[]);
  }
  buscarSugerido(termino: string){
    this.buscar(termino);
    this.paisesSugeridos = [];
    this.termino = '';
  }

}
