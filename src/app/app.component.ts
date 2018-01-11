import { Component, OnInit } from '@angular/core';
import { firebaseAuthService } from 'app/shared/firebase.auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userLoggedIn:boolean;
  userName:string;
  constructor(private _authService: firebaseAuthService){

  
  }
  ngOnInit(){
    this.userLoggedIn = this._authService.userLoggedIn;
    this.userName = this._authService.loggedInUser;
  }
  
  pageTitle = 'Expense Tracker Demo App';
}
