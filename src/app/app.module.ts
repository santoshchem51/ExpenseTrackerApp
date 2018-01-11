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
import { CollapsibleContentComponent } from 'app/common/collapsable-content.component';
import { ExpenseListComponent } from 'app/expenses/expense-list.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { firebaseAuthService } from 'app/shared/firebase.auth.service';
import { LoginComponent } from 'app/admin/login.component';
import { SignUpComponent } from 'app/admin/sign-up.component';
import { environment } from 'environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Error404Component,
    NavBarComponent,
    ExpenseGroupListComponent,
    ExpenseGroupComponent,
    CollapsibleContentComponent,
    ExpenseListComponent,
    LoginComponent,
    SignUpComponent           
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [ExpenseGroupsService, 
              firebaseAuthService,
              {provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
