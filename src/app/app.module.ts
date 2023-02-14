import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [AppComponent, UsersComponent, UserComponent, HomeComponent, StudentListComponent ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
