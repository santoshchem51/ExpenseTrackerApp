import { Component } from "@angular/core";
import { firebaseAuthService } from "app/shared/firebase.auth.service";
import { Router } from "@angular/router";
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls:['./sign-up.component.scss']
})
export class SignUpComponent{
    email: string;
    password1: string;
    password2: string;
    passwordFail: boolean = false;
    
    constructor(private _authSerivce : firebaseAuthService, private _router : Router){

    }

    signUp(){
      alert("hi");
        if (this.password1 !== this.password2) {
          this.passwordFail = true;
        } else {
          this.passwordFail = false;
          this._authSerivce.register(this.email, this.password1);
          this._authSerivce.verifyUser();
        }
      }
    
      cancel(){
        this._router.navigate(['/admin/login']);
      }
}