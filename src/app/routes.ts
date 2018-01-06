import { Routes } from "@angular/router";
import { WelcomeComponent } from "app/home/welcome.component";
import {Error404Component} from "app/errors/404.component";
import { ExpenseGroupsComponent } from "app/expensegroups/expensegroups.component";



export const appRoutes : Routes = [
    {path:'welcome',component:WelcomeComponent},
    {path:'expensegroups',component:ExpenseGroupsComponent},
    {path:'404',component:Error404Component},
    {path:'', redirectTo:'welcome', pathMatch:'full'},
    {path:'**', redirectTo:'welcome',pathMatch:'full'},    
]