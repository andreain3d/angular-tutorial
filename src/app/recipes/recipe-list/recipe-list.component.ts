import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test.', 'https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
