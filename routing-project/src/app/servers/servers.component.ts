import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = []

  constructor(private serviceService: ServersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serviceService.getServers();
  }


  onReload(){
    this.router.navigate(['/servers'], {relativeTo: this.route})
  }
}
