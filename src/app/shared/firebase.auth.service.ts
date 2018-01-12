import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class firebaseAuthService {   
    userLoggedIn: boolean;
    loggedInUser: string;
    authUser: Observable<firebase.User>; 
 

    constructor( private router: Router, private _firebaseAuth : AngularFireAuth) {
        this.authUser = _firebaseAuth.authState;
     }

     verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }                
        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string){
        this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                alert(`${error.message} Please Try Again!`);
        });
    }
  
    verifyUser() {
        this.authUser.subscribe(authUser=> {           
            this.loggedInUser = authUser.email;
            this.userLoggedIn = true;           
        });       
    }

    login(loginEmail: string, loginPassword: string) {
        this._firebaseAuth.auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        .then((res) => {     
           // alert($'welcome {res.email}');       
            this.router.navigate(['/']);
            })
            .catch(function(error) {
                alert(`${error.message} Unable to login. Try again!`);
        });
    }

    logout(){
        this.userLoggedIn = false;
        this._firebaseAuth.auth.signOut().then(function() {
            
        }, function(error) {
            alert(`${error.message} Unable to logout. Try again!`);
        });
    }
}