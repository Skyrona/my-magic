import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SharedModule { }
