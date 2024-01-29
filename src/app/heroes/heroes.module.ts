import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule, //! Necesario para poder usar directivas como *ngIf o *ngFor
  ]
})
export class HeroesModule {}
