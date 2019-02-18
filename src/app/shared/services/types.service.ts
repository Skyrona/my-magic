import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  public types: string[];
  constructor(private http: HttpClient) {
    this.types = [
      "Artifact",
      "Conspiracy",
      "Creature",
      "Enchantment",
      "Instant",
      "Land",
      "Phenomenon",
      "Plane",
      "Planeswalker",
      "Scheme",
      "Sorcery",
      "Tribal",
      "Vanguard"
    ];
  }

  getTypes(): Observable<string[]> {
    return of(this.types);
    // return this.http.get(`https://api.magicthegathering.io/v1/types`);
  }

  isType(type: string): boolean {
    return -1 !== this.types.indexOf(type);
  }

  randType():string{
    return this.types[Math.random()*this.types.length];
  }
}
