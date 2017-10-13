import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ExpenseService } from "../../services/expense-service";

@Component({
    selector: 'home',
    templateUrl: './showExpenseForm.component.html'
})
export class ShowExpenseFormComponent {
    public ExpenseList = [];
    public constructor(private expService: ExpenseService, private router: Router) {
        this.expService.getExpenseList()
            .subscribe(
                (data: Response) => (this.ExpenseList = data.json())
            );
    }

    public addExpense() {
        this.router.navigateByUrl('/new');
    }

    public deleteExpense(expenseId: number){
        var status = confirm("Are you sure you want to delete this expense ?");
        if (status == true) {
            this.expService.removeExpenseDetails(expenseId)
                .subscribe((data: Response) => (alert("Expense Deleted Successfully")));  ;

            //Get new list of expenses  
            this.expService.getExpenseList()
                .subscribe(
                (data: Response) => (this.ExpenseList = data.json())
                );
        } 
    }
}
