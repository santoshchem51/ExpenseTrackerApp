import { Routes } from "@angular/router";
import { WelcomeComponent } from "app/home/welcome.component";
import {Error404Component} from "app/errors/404.component";
import { ExpenseGroupListComponent } from "app/expensegroups/expensegroup-list.component";
import { ExpenseGroupComponent } from "app/expensegroups/expensegroup.component";
import { ExpenseListComponent } from "app/expenses/expense-list.component";



export const appRoutes : Routes = [
    {path:'welcome',component:WelcomeComponent},
    {path:'expensegroups',component:ExpenseGroupListComponent},
    {path:'expensegroup/:id',component:ExpenseGroupComponent},
    {path:'expenses',component:ExpenseListComponent,pathMatch:'full'},
    {path:'404',component:Error404Component},
    {path:'', redirectTo:'welcome', pathMatch:'full'},
    {path:'**', redirectTo:'welcome',pathMatch:'full'},    
]