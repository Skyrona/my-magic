import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public title: string;
  public query: string;
  
  constructor(
    private activeRoute: ActivatedRoute) {
    this.title = "My Magic";
    this.query = null;
  }
  ngOnInit() {
    if (null === this.query) {      
      this.activeRoute.url.subscribe(
        () =>{
          this.query = this.activeRoute.snapshot.params["query"];
        }
      )
    };
  }
}