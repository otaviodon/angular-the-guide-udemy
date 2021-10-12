import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', attr style
  //selector: '.app-servers', class style
  //template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2']

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer =  true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }


  onUpdateServerName(event: any){
    console.log(event)
    this.serverName = event.target.value;
  }
}
