import { Component } from "@angular/core";
import { firebaseAuthService } from "app/shared/firebase.auth.service";
import { Router } from "@angular/router";
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.scss']
})
export class LoginComponent{
    email: string;
    password1: string;

    constructor(private _authSerivce: firebaseAuthService, private _router : Router){

    }

    login(){
        this._authSerivce.login(this.email,this.password1);
        this._authSerivce.verifyUser()
    }

    signup(){
        this._router.navigate(['/admin/signup']);
    }

    cancel(){
        this._router.navigate(['']);
    }
}