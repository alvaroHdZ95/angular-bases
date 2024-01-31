import { Component, Input } from '@angular/core';
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
      name: 'Trunks',
      power: 10
    }
  ]

}
