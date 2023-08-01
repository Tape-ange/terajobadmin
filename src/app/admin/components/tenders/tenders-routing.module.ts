import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { ListComponent } from './list/list.component';
import { TendersComponent } from './tenders.component';

const routes: Routes = [
  {
    path: '',
    component: TendersComponent,
    children: [
      {
        path: 'list',
     
        component: ListComponent,
      },
      {
        path: '**',
        
        redirectTo: 'list',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TendersRoutingModule { }
