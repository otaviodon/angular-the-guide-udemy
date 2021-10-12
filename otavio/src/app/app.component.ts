import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomeComp = 'Otavio Moreira da Silva';
  eventNumbers: number[] = [];

  onChange(event: any){
    console.log(event.id)
    this.eventNumbers.push(event.id);
    console.log(this.eventNumbers)
  }
}
