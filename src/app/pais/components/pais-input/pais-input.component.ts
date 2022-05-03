import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() termino: string = '';
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  
  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(500))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    })
  };

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPersionada(){
    this.debouncer.next(this.termino);
  }


}
