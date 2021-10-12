import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer123', content: 'Just a test!'}];

  onServerAdded(ServerData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'server',
        name: ServerData.serverName,
        content: ServerData.serverContent
      });
    }

    onBluePrintAdded(bluePrintData: {serverName: string, serverContent: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: bluePrintData.serverName,
        content: bluePrintData.serverContent
      });
    }


  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyirst(){
    this.serverElements.splice(0, 1);
  }

}
