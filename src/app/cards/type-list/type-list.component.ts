import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { TypesService } from 'src/app/shared/services/types.service';

@Component({
  selector: 'my-magic-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {

  @Output() onTypeSelected: EventEmitter<string>;

  public listType: string[];

  constructor(private typesService: TypesService) {
    this.onTypeSelected = new EventEmitter();
  }
  ngOnInit() {
    this.typesService.getTypes().subscribe(
      (data: string[]) => { this.listType = data },
      () => { }
    )
  }
  onClickType(clickedType: string) {
    this.onTypeSelected.emit(clickedType);
  }
}



