import { Component, OnInit } from "@angular/core";
import { firebaseAuthService } from 'app/shared/firebase.auth.service';
import { Router } from "@angular/router";
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

    constructor(private _authService: firebaseAuthService, private _router: Router ){
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
    logout() {
        this._authService.logout();
        this._router.navigate(['/']);
    }
    toogleDropDown() : void {       
        this.showDropDown = !this.showDropDown;        
    }
}