import { Component } from "@angular/core";
import { ExpenseGroupsService } from "app/shared/expensegroups.service";
import { IExpense } from "app/expensegroups/expense";
import { OnInit } from "@angular/core";
import { OnChanges } from "@angular/core";
import { Input } from "@angular/core/src/metadata/directives";


@Component({
selector: 'expense-list',
templateUrl : './expense-list.component.html'
})
export class ExpenseListComponent implements OnInit {    
   @Input() expenseList : IExpense[];
    sortBy: string = "amount";
   @Input() isChildComponent: boolean = false;
    

    constructor(private _expenseService : ExpenseGroupsService){

    }
    doSortBy(sortInput : string){    
      this.sortBy = sortInput;
      switch (sortInput) {
        case "amount":
            this.expenseList.sort(sortByAmountDesc);
          break;
        case "date" :
            this.expenseList.sort(sortByDateDesc);
          break;
        case "title":
            this.expenseList.sort(sortByTitleAsc)
          break;
        default:
          break;
      }      
    } 

    ngOnInit(): void {
      if(!this.isChildComponent){      
       this.expenseList =  <IExpense[]> [{
        "id": 1,
        "description": "Train tickets",
        "date": "2014-05-03T00:00:00",
        "amount": 63.0,
        "expenseGroupId": 1
      },
      {
        "id": 3,
        "description": "Dinner",
        "date": "2014-05-03T00:00:00",
        "amount": 50.0,
        "expenseGroupId": 1
      },
      {
        "id": 5,
        "description": "Entrance tickets",
        "date": "2014-05-03T00:00:00",
        "amount": 200.0,
        "expenseGroupId": 1
      },
      {
        "id": 11,
        "description": "Lunch",
        "date": "2014-05-04T00:00:00",
        "amount": 35.0,
        "expenseGroupId": 1
      } ];
        // this._expenseService.getExpenses().subscribe(expenses =>
        // this.expenseList = expenses
        // )
      }
      this.expenseList.sort(sortByAmountDesc)
    }    
}
function sortByAmountDesc(e1: IExpense, e2: IExpense){ 
 if(e2.amount > e1.amount) return 1
 else if(e2.amount === e1.amount) return 0
 else return -1
}

function sortByDateDesc(e1: IExpense, e2: IExpense){
  var e1Date = new Date(e1.date);
  var e2Date = new Date(e2.date);
   if(e1Date > e2Date) return -1
   if(e1Date < e2Date) return 1
   return 0
}

function sortByTitleAsc(e1:IExpense, e2:IExpense){
  var e1Title = e1.description.toLowerCase(), e2Title = e2.description.toLowerCase();
  if(e1Title < e2Title) return -1
  if(e1Title > e2Title) return 1
  return 0;
}