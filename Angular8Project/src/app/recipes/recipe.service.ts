import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe',
      'This is simply a test recipe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ricotta-goat-cheese-stuffed-zucchini-recipe-1558036677.jpg?resize=480:*',
      [new Ingredient('Meat', 1),
        new Ingredient('Beans', 5)]),
    // tslint:disable-next-line:max-line-length
    new Recipe('2nd Test Recipe',
      'This is second a test recipe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ricotta-goat-cheese-stuffed-zucchini-recipe-1558036677.jpg?resize=480:*',
      [new Ingredient('abc', 2),
        new Ingredient('xxx', 10)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  } 
}
