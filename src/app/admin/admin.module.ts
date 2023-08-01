import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
})
export class AdminModule { }
