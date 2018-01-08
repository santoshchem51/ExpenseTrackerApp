import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { appRoutes } from 'app/routes';
import { Error404Component } from './errors/404.component'
import { NavBarComponent } from 'app/nav/navbar.component';
import { ExpenseGroupListComponent } from 'app/expensegroups/expensegroup-list.component';
import { ExpenseGroupComponent } from 'app/expensegroups/expensegroup.component';
import { ExpenseGroupsService } from 'app/shared/expensegroups.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Error404Component,
    NavBarComponent,
    ExpenseGroupListComponent,
    ExpenseGroupComponent           
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExpenseGroupsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
