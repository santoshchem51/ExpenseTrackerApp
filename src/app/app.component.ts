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
    _authService.authUser.subscribe((auth) =>{
      if(auth == null){
          this.userLoggedIn = false;
      } else{
          this.userLoggedIn = true;
          this.userName = auth.email;
      }
  });  
  }
  ngOnInit(){
    
  }
  
  pageTitle = 'Expense Tracker Demo App';
}
