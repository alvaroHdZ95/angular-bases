import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)" >+1</button>
    <button type="reset" (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>
  `
})
export class CounterComponent{
  public initCounterValue: number = 10;
  public counter: number = this.initCounterValue;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = this.initCounterValue;
  }

}
