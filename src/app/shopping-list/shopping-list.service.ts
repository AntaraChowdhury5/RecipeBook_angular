import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('Mango',10)
  ];

  ingredientChanged=new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredient(){
    return this.ingredients.slice()
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredient(ingredients:Ingredient[]){
    /* for(let ingredient of ingredients){
      this.addIngredient(ingredient)
    } */
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice())
  }
}

