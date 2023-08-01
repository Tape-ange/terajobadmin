import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ConsultantListComponent } from './consultant-list/consultant-list.component';
import { PatnerListComponent } from './patner-list/patner-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'list',

        component: ListComponent
      },
      {
        path: 'add',

        component: AddUserComponent,
      },
       {
        path: 'customerList',

        component: CustomerListComponent,
      },
       {
        path: 'consultantList',

        component: ConsultantListComponent,
      },
       {
        path: 'patnerList',

        component: PatnerListComponent,
      },

      {
        path: '**',
        redirectTo: 'list'

      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
