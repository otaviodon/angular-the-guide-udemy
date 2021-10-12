import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string } = { id: 0, name: '' };

  constructor(private route: ActivatedRoute) {}
  paramsSubscription?: Subscription;

  ngOnInit(): void {
    console.log(this.route);
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params.subscribe( // reload params
      (params: Params) => {
        this.user.id = params['id'],
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
