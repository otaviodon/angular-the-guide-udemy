import { Component } from "@angular/core";


@Component ({ // needs an obj to configurate
  selector: 'app-server',
  //template: '<p>Server Inline</p>'
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: #ffffff
    }
  `]
})


export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
