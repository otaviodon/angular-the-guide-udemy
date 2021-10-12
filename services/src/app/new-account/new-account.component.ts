import { Component, Output, EventEmitter } from '@angular/core';

import { AccountService } from './../accounts.service';
import { LoggingService } from './../logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
 /*  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>(); */

  constructor(private logginService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string, ) {
 /*    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    }); */

    /*const service = new LoggingService();
    service.logStatusChanged(accountStatus); */
    this.accountService.addAccount(accountName, accountStatus);
    //this.logginService.logStatusChanged(accountStatus);
  }
}
