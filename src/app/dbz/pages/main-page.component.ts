import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  constructor ( private dbzService: DbzService) {}

  get characters(): Character[] {
    //* De este modo devolvemos una copia del array con los personajes. Así
    //* si en algún momento se modifican, no se modificará el array original
    //* almacenado en el servicio. Lo correcto si se quiere modificar la lista
    //* original del servicio es llamar a un método de guardado cuando se
    //* considere necesario.
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string): void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character): void {
    this.dbzService.addCharacter( character );
  }

 }
