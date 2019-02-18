import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { CardListModel } from 'src/app/shared/models/magicthegathering/card-list.model';
import { CardModel } from 'src/app/shared/models/magicthegathering/card.model';
import { MagicTheGatheringService } from 'src/app/shared/services/magic-the-gathering.service';
import { TypesService } from 'src/app/shared/services/types.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CardDialogComponent } from '../card-dialog/card-dialog.component';

@Component({
  selector: 'my-magic-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnChanges {

  @Input() type: string;

  @Output() onBeforeCards: EventEmitter<boolean>;
  @Output() onCards: EventEmitter<boolean>;

  public cards: CardModel[];

  constructor(private magicTheGatheringService: MagicTheGatheringService,
    private typesService: TypesService,
    private redirection: Router,
    private dialog: MatDialog) {
    this.cards = [];
    this.onBeforeCards = new EventEmitter(true);
    this.onCards = new EventEmitter(true);
  }

  ngOnInit() { }

  ngOnChanges() {
    if (!this.type) {
      return;
    }
    if (!this.typesService.isType(this.type)) {
      this.redirection.navigate(['/cards']);
      return;
    }
    this.onBeforeCards.emit(true);
    this.loadCards();
  }

  loadCards() {
    this.magicTheGatheringService.getCardsByType(this.type).subscribe(
      (data: CardListModel) => {
        this.cards = data.cards;
        this.onCards.emit(true);
      },
      () => { }
    );
  }

  openDialog(image: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      url: image,
    }
    this.dialog.open(CardDialogComponent, dialogConfig);
  }
}
