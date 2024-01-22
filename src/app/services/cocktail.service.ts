import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Cocktail } from '../models/cocktail';
import { COCKTAILS } from '../variables/cocktails';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktail() : Observable<Cocktail[]> {
    const cocktails = of(COCKTAILS)
    return cocktails;
  }
}
