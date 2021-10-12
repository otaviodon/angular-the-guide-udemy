import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
/*   styles: [
    `
      h1 {
        color: blue;
      }

      .white {
        color: white;
      }
    `,
  ], */
})
export class AppComponent {
  name = 'Otavio Moreira';
  username = '';
  log: any = [];

  showSecret = false;

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  resetTxt() {
    this.username = '';
  }
}
