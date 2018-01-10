import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IExpenseGroup } from "app/expensegroups/expensegroup";
import { IExpense } from "app/expensegroups/expense";

@Injectable()
export class ExpenseGroupsService {
    private apiUrl : string = "https://expensetrackerdemoapi.azurewebsites.net/api";
    constructor(private _http: Http){

    }

    getExpenseGroups() : Observable<IExpenseGroup[]> {
              return this._http.get(this.apiUrl+'/expensegroups')
        .map(res=> res.json())
        .do(data=> console.log('All data: '+ JSON.stringify(data)))
        .catch(this.handleError);
    }

    getExpenses() : Observable<IExpense[]> {
        return this._http.get(this.apiUrl +'/expenses')
        .map(res=> res.json())
        .do(data=> console.log('All data: '+JSON.stringify(data)))
        .catch(this.handleError)
    }

    private handleError(err : any) : Observable<IExpenseGroup[]>
    {
        console.log(err.message);
        throw Observable.throw(err.message);
    }

}