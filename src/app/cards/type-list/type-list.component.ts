import { Component, OnInit, } from '@angular/core';
import { TypesService } from 'src/app/shared/services/types.service';

@Component({
  selector: 'my-magic-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent implements OnInit {
  public listType: string[];

  constructor(private typesService: TypesService) {

    // this.listType = [];
  }
  ngOnInit() {
    this.typesService.getTypes().subscribe(
      (data:string[])=>{this.listType=data},
      ()=>{}
    )
  }
}



