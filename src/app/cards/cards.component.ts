import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-magic-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() type: string;

  public title: string;
  public query: string;
  public isLoading: boolean;

  constructor(
    private activeRoute: ActivatedRoute) {

    this.title = "My Magic";
    this.query = null;
    this.isLoading = false;
  }
  ngOnInit() {
    if (null === this.query) {
      this.activeRoute.url.subscribe(
        () => {
          this.query = this.activeRoute.snapshot.params["query"];
        }
      )
    };
  }
  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}