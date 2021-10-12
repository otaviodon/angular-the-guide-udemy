import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  //recipeSelected = new Subject<Recipe>();

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

/*   private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe - Burguer',
      'What else do you need?',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Recipe 2',
      'This is a simple test',
      'https://www.otaviomoreira.com.br/images/home-desperdicio.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
  ]; */

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
  }


  getRecipes() {
    return this.recipes.slice(); //copy
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngridientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngridients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }



}
