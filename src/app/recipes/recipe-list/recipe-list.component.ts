import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Cake','baked','https://imgcdn.floweraura.com/Vanilla-Fruit-Cake-9999520cb-291117-AAA.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
