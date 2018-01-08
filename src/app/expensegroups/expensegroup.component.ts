import { Component } from '@angular/core';
import { IExpenseGroup, ExpenseGroup } from 'app/expensegroups/expensegroup';
import { ExpenseGroupsService } from 'app/shared/expensegroups.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
templateUrl : './expensegroup.component.html',
styles:[`
.row {margin-left: -15px; 
    margin-right: -15px;     
    text-align:left;
}
`]
})
export class ExpenseGroupComponent implements OnInit {

   
    constructor(private _expenseGroupService : ExpenseGroupsService, private _route : ActivatedRoute){

    }
    ngOnInit(): void {
      let id = this._route.snapshot.params['id'];
      this._expenseGroupService.getExpenseGroups().subscribe(expenseGroups=>{
       this.expenseGroup =  expenseGroups.find((expGrp:IExpenseGroup)=>
            expGrp.id == id    
      )
      })
    }
    expenseGroup: IExpenseGroup;
}