import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

    ingredientAdded = new Subject<void>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5), 
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next();
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next();
    }

}