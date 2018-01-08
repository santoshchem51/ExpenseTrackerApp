import {Component} from '@angular/core'
import { IExpenseGroup } from 'app/expensegroups/expensegroup';
import { ExpenseGroupsService } from 'app/shared/expensegroups.service';
import { OnInit } from '@angular/core';

@Component({
templateUrl : './expensegroup-list.component.html',
styles:[`
.pad-left { margin-left: 10px; }
.thumbnail { min-height: 210px; }
.thumbnail {text-align : left;}
`]

})

export class ExpenseGroupListComponent implements OnInit { 
    pageTitle : string = "Expense groups";
    expenseGroups : IExpenseGroup[];

    constructor(private _expenseGroupService : ExpenseGroupsService){

    }

    ngOnInit(): void {      
      this._expenseGroupService.getExpenseGroups().subscribe(expensegroups => {
          this.expenseGroups = expensegroups;
      });
    }

    

}