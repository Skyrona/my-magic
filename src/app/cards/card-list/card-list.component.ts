import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() type: string;

  public cards: CardModel[];

  constructor(private magicTheGatheringService: MagicTheGatheringService,
    private typesService: TypesService,
    private redirection: Router) {
    this.cards = [];
  }

  ngOnInit() { }

  ngOnChanges() {
    if (!this.type) {
      return;
    }
    if (!this.typesService.isType(this.type)) {
      this.redirection.navigate(['']);
      return;
    }
    this.loadCards();
  }

  loadCards() {
    this.magicTheGatheringService.getCardsByType(this.type).subscribe(
      (data: CardListModel) => { this.cards = data.cards },
      () => { }
    );
  }

}
