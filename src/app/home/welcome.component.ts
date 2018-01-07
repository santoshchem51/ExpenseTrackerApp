import { Component } from "@angular/core";


@Component({
    selector:'app-welcome',
    templateUrl :'./welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle : string = "Welcome to Expense Tracker Portal";

}