import { AccountService } from './accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  providers: [AccountService] // cria uma instancia da classe
})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
    console.log(this.accounts);
  }

}
