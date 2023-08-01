import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CommercialBoRoutingModule } from './commercial-bo-routing.module';
import { CommercialBoComponent } from './commercial-bo.component';
import { ListCommercialBoComponent } from './list-commercial-bo/list-commercial-bo.component';
import { RegisterCommercialBoComponent } from './register-commercial-bo/register-commercial-bo.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { DashbordStatComponent } from '../dashbord/dashbord-stat/dashbord-stat.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    CommercialBoComponent,
    ListCommercialBoComponent,
    RegisterCommercialBoComponent,
    DashbordStatComponent,

  ],
  imports: [
    CommonModule,
    CommercialBoRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatInputModule


  ]
})
export class CommercialBoModule { }
