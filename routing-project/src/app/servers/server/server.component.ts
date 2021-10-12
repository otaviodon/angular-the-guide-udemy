import { ServersService } from '../servers.service';
import { Component, OnInit } from '@angular/core';
import { ServerObj } from '../server.model';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  //public server: {id: number, name: string, status: string};
  public server: any;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server']
      }
    );


    /* console.log(this.route.snapshot.params.id)
    const id: number = Number(this.route.snapshot.params['id']);
    //console.log(typeof id)
    this.server = this.serversService.getServer(id);

    this.route.params
    .subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id'])
      }
    ) */
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
