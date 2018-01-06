import {Component} from '@angular/core'
import { IExpenseGroup } from 'app/expensegroups/expensegroup';

@Component({
templateUrl : './expensegroups.component.html'
})

export class ExpenseGroupsComponent {
    pageTitle : string = "Expense groups";
    expenseGroups : IExpenseGroup[] = [
        {
          id: 1,
          userId : "https://expensetrackeridsrv3/embedded_1",
          title: "Web Development Conference",
          description: "Web development conference in NYC",
          expenseGroupStatusId: 1          
        },
        {
          id: 2,
          userId: "https://expensetrackeridsrv3/embedded_2",
          title: "Contoso Prospect Visit",
          description: "Possible prospect visit and dinner",
          expenseGroupStatusId: 2          
        },
        {
          id: 4,
          userId: "https://expensetrackeridsrv3/embedded_1",
          title: "Business Trip UK",
          description: "Trip to potential clients in the UK",
          expenseGroupStatusId: 1          
        },
        {
          id: 6,
          userId: "https://expensetrackeridsrv3/embedded_3",
          title: "Microsoft BUILD Conference",
          description: "BUILD conference in San Francisco",
          expenseGroupStatusId: 1          
        },
        {
          id: 7,
          userId: "https://expensetrackeridsrv3/embedded_1",
          title: "Techdays Finland",
          description: "Techdays conference in Finland - speaker trip",
          expenseGroupStatusId: 1         
        }
      ];

}