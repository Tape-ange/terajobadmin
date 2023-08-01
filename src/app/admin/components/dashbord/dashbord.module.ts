import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { DashbordComponent } from './dashbord.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DashbordComponent
  ],
  imports: [
    // CommonModule,
   
    DashbordRoutingModule,
    MatTooltipModule,
    MatButtonModule
 

  ]
})
export class DashbordModule { }
