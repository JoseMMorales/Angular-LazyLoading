import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'edit', component: EditComponent },
      { path: 'list', component: ListComponent },
      { path: 'new', component: ListComponent },
      { path: 'user', component: UserComponent },
      { path: '**', redirectTo: 'list'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
