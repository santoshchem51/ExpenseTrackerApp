import { Routes } from "@angular/router";
import { WelcomeComponent } from "app/home/welcome.component";
import {Error404Component} from "app/errors/404.component";



export const appRoutes : Routes = [
    {path:'welcome',component:WelcomeComponent},
    {path:'404',component:Error404Component},
    {path:'', redirectTo:'welcome', pathMatch:'full'},
    {path:'**', redirectTo:'welcome',pathMatch:'full'},    
]