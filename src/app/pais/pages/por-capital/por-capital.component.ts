import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string= '';
  hayError: boolean = false;
  paises: Country[] = [];
  
  constructor(private paisService: PaisService) { }
  
  buscar(termino: string){
    console.log(termino);
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPaisPorCapital(termino)
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
    console.log(termino);
  }


}
