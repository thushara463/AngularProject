import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is simply a test', 
    'https://hips.hearstapps.com/hmg-prod/images/190430-cheesy-bacon-ranch-chicken-226-1556829090.jpg'),
    new Recipe('Test Recipe', 'This is simply a test', 
    'https://hips.hearstapps.com/hmg-prod/images/190430-cheesy-bacon-ranch-chicken-226-1556829090.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.selectedItem.emit(recipe);
    console.log(recipe);
  }

}
