export interface IExpenseGroup {
    id : number,
    userId: string,
    title: string,
    description: string,
    expenseGroupStatusId: number,
}

export class ExpenseGroup implements IExpenseGroup {
    id: number;
    userId: string;
    title: string;
    description: string;
    expenseGroupStatusId: number;

}