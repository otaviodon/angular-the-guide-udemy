import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class ShoppingListService {

  /* ingridientsChanged = new EventEmitter<Ingredient[]>(); */
  ingridientsChanged = new Subject<Ingredient[]>();

  startEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];


  getIngredients(){
    return this.ingredients//copy
    //return this.ingredients.slice();//copy
  }

  getIngridient(index: number){
    return this.ingredients[index];
  }

  addIngridient(ingridient: Ingredient){
    this.ingredients.push(ingridient)
    this.ingridientsChanged.next(this.ingredients.slice());
  }

  addIngridients(ingridients: Ingredient[]){
  /*     for(let ingredient of ingridients){
        this.addIngridient(ingredient);
      } */
      this.ingredients.push(...ingridients);
      this.ingridientsChanged.next(this.ingredients.slice())
  }

  updateIngridient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingridientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingridientsChanged.next(this.ingredients.slice())
  }

}
