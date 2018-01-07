import { IExpense } from "app/expensegroups/expense";

export interface IExpenseGroup {
    id : number,
    userId: string,
    title: string,
    description: string,
    expenseGroupStatusId: number,
    expenses : IExpense[]
}

export class ExpenseGroup implements IExpenseGroup {    
    constructor(public id:number, public userId: string, public title:string, public description: string,
    public expenseGroupStatusId: number, public expenses: IExpense[]) {        
        
    }   
}