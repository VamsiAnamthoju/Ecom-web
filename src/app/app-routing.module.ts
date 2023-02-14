import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [ 
{path: 'home', component: HomeComponent},
{path: 'user', component: UserComponent},
{path: 'users',component: UsersComponent},
{path: 'studentlist',   component: StudentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
