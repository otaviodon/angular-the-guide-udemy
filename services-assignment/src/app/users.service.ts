import { CounterService } from './counter.service';
import { Injectable } from "@angular/core";

@Injectable()

export class UsersService {

  constructor(private counterService: CounterService){}

  activeUsers = ['Max', 'Anna', 'Otavio'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }


}
