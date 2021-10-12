import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {

  @Input() account!: {name: string, status: string};
  @Input() id!: number;
/*   @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>(); */

  constructor(private logginService: LoggingService, private accountService: AccountService) {}

  onSetTo(status: string) {
 /*    this.statusChanged.emit({id: this.id, newStatus: status}); */
    //console.log('A server status changed, new status: ' + status);
    this.accountService.updateStatus(this.id, status);
    //this.logginService.logStatusChanged(status);
    this.accountService.statusUpdated.emit(status)
  }

}
