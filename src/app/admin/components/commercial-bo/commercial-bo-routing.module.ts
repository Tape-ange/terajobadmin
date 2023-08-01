import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialBoComponent } from './commercial-bo.component';
import { ListCommercialBoComponent } from './list-commercial-bo/list-commercial-bo.component';
import { RegisterCommercialBoComponent } from './register-commercial-bo/register-commercial-bo.component';

const routes: Routes = [
  { 
    path: '', 
    component: CommercialBoComponent 
  },
  {
    path: 'listCommercialBo',
    component: ListCommercialBoComponent
  },
  {
    path: 'resfisterCommercialBo',
    component: RegisterCommercialBoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialBoRoutingModule { }
