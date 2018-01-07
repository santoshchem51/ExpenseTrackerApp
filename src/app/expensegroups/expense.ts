export interface IExpense {
    id: number,
    description: string,
    date: string,
    amount: number,
    expenseGroupId: number
}

export class Expense implements IExpense {    
    constructor(public id: number, public description:string, public date: string,
    public amount: number, public expenseGroupId: number) {        
        
    }
}