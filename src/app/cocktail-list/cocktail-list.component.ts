import { Component,OnInit } from '@angular/core';

import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/cocktail';



@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent implements OnInit {

  constructor(private cocktailService: CocktailService) {}

  cocktails: Cocktail[]= []

  getCocktails() : void {
    this.cocktailService.getCocktail().subscribe(cocktails => this.cocktails = cocktails);
  }

  ngOnInit(): void {
      this.getCocktails();
  }

}
