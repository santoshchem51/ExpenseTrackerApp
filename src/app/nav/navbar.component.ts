import { Component } from "@angular/core";

@Component({
    selector:'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.scss']
})
export class NavBarComponent {
    navdefault : string = "default nav bar";
    showDropDown: boolean = false;

    toogleDropDown() : void {       
        this.showDropDown = !this.showDropDown;        
    }
}