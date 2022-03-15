import { Component, EventEmitter, Output } from '@angular/core';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {
  termino:string='';
  @Output() onEnter: EventEmitter<string>=new EventEmitter();

  buscar(){
    this.onEnter.emit(this.termino);
  }


}