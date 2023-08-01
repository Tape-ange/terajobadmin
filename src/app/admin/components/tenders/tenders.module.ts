import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TendersRoutingModule } from './tenders-routing.module';
import { TendersComponent } from './tenders.component';
import { ListComponent } from './list/list.component';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    TendersComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    TendersRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,

  ]
})
export class TendersModule { }
