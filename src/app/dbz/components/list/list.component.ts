import { Component, EventEmitter, Input, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //* Establece que la lista de caracteres es una propiedad que puede ser enviada
  //* desde un componente (MainPageComponent) a otro (ListComponent)
  //* Al definirlo con contenido, si no recibe ninguna entrada mostrará ese contenido
  //* por defecto.
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string ): void {
    if ( !id ) return;

    this.onDelete.emit(id);
  }

}


