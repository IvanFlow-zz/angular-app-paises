import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
     `
     button{
       margin-right: 5px;
     }
     `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paisesPorRegion: Country[] = [];

  constructor(private paisService: PaisService) { }
  getClaseCSS(region: string){
    return (region === this.regionActiva)?'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion(region: string ){
    this.regionActiva = region;
    this.paisService.buscarRegion(region)
    .subscribe({
      next: (resp) => {
        console.log(resp);
        this.paisesPorRegion = resp;
      },
      error: (err) => {
        console.info(err);
        // this.hayError = true;
        this.paisesPorRegion = [];
    }});
    //TODO: Hacer llamado al servicio
  }
}
