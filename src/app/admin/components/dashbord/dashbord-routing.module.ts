import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { DashbordStatComponent } from './dashbord-stat/dashbord-stat.component';
import { DashbordComponent } from './dashbord.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashbordComponent
  // }
  {
    path: '',

    component: DashbordStatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
