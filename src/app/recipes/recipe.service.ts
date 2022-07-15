import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected=new EventEmitter<Recipe>();

  constructor(private slService:ShoppingListService) { }

  private recipes:Recipe[]=[
    new Recipe('Cake','baked','https://imgcdn.floweraura.com/Vanilla-Fruit-Cake-9999520cb-291117-AAA.jpg',
    [
      new Ingredient('cream',500),
      new Ingredient('vanila',50)
    ]),
    new Recipe('Cockie','baked','https://data.whicdn.com/images/45919935/original.png',
    [
      new Ingredient('sugar',500),
      new Ingredient('cocoa',50)
    ])
  ];
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredient:Ingredient[]){
    this.slService.addIngredient(ingredient)
  }
}