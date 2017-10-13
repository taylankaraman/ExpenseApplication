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
}
