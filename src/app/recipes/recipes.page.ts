import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})

export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.recipes);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
