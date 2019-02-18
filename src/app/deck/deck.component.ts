import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-magic-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  public deck:string[];

  constructor() { }

  ngOnInit() {
  }

  onClickCard(imageUrl:string){
    this.deck.push(imageUrl);
  }

}
