import { Component, OnInit } from "@angular/core";
import { firebaseAuthService } from 'app/shared/firebase.auth.service';

@Component({
    selector:'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
    navdefault : string = "default nav bar";
    showDropDown: boolean = false;
    userLoggedIn:boolean;
    userName:string;

    constructor(private _authService: firebaseAuthService){

  
    }
    ngOnInit(){
      this.userLoggedIn = this._authService.userLoggedIn;
      this.userName = this._authService.loggedInUser;
    }
    toogleDropDown() : void {       
        this.showDropDown = !this.showDropDown;        
    }
}