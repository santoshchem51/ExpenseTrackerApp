import { Component } from '@angular/core';
import { IExpenseGroup } from 'app/expensegroups/expensegroup';

@Component({
templateUrl : './expensegroup.component.html',
styles:[`
.row {margin-left: -15px; 
    margin-right: -15px;     
    text-align:left;
}
`]
})
export class ExpenseGroupComponent {
   
    expenseGroup: IExpenseGroup = {
        "id": 6,
      "userId": "https://expensetrackeridsrv3/embedded_3",
      "title": "Microsoft BUILD Conference",
      "description": "BUILD conference in San Francisco",
      "expenseGroupStatusId": 1,
      "expenses": [
        {
          "id": 16,
          "description": "Entrance tickets",
          "date": "2014-04-01T00:00:00",
          "amount": 1200.0,
          "expenseGroupId": 6
        }
      ]
    }
}