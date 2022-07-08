import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Cake','baked','https://imgcdn.floweraura.com/Vanilla-Fruit-Cake-9999520cb-291117-AAA.jpg'),
    new Recipe('Cockie','baked','https://data.whicdn.com/images/45919935/original.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
