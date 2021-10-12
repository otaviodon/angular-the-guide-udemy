import { Subscription, Observable } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient[]}> ;
  private isChangeSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService,
    private store: Store <{ shoppingList: {ingredients: Ingredient[]}}>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    //this.store.select('shoppingList').subscribe();
  /*   this.ingredients = this.shoppingListService.getIngredients();
    this.isChangeSub = this.shoppingListService.ingridientsChanged.subscribe(
      (ingridients: Ingredient[]) => (this.ingredients = ingridients)
    );
 */
    this.loggingService.printLog('Hello from shopping-list component ngOnInit');
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }

  ngOnDestroy(): void {
   // this.isChangeSub.unsubscribe();
  }
}
