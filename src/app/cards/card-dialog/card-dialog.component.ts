import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'my-magic-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {

  public image: string;
  public id: string;

  constructor(
    private dialogRef: MatDialogRef<CardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.image = data.url;
    this.id = data.id;
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
}
