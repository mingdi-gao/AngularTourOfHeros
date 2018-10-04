import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Observable<Hero[]> {
    return of(HEROES);
  }
}
