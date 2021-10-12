import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  idade: number = 0;
  @Output() mudouIdade = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mudarIdade(){
      this.idade++;
      this.mudouIdade.emit({id: this.idade});
  }

}
