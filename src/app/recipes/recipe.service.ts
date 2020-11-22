import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Big Fat Burger', 'Tasty burger recipe', 
        'https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg', 
        [
            new Ingredient('Bread', 1), 
            new Ingredient('Beef Patty', 1)
        ]),
        new Recipe('Tacos', 'Awesome tacos for holiday', 
        'https://d1e3z2jco40k3v.cloudfront.net/-/media/mccormick-us/recipes/mccormick/f/800/fiesta_tacos_800x800.jpg',
        [
            new Ingredient('Tortila', 1), 
            new Ingredient('Pulled Pork', 50)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}