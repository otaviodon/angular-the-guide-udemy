import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-alert-success',
    templateUrl: './success-alert.component.html',
    styles: [`
      h1 {color: green; font-weight: 200; font-style: italic};
    `]
})

export class SuccessAlertComponent implements OnInit {
  constructor(){ }

  ngOnInit(): void {

  }
}






