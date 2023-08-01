import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { PatnerListComponent } from './patner-list/patner-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    UserComponent,
    ListComponent,
    AddUserComponent,
    ConsultantListComponent,
    PatnerListComponent,
    CustomerListComponent
  ],
  imports: [

    CommonModule,

    UserRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class UserModule { }
