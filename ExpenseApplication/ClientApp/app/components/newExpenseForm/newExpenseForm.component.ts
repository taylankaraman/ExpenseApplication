import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'new-expenseform',
    templateUrl: './newExpenseForm.component.html'
})
export class NewExpenseFormComponent {
    constructor(private router: Router) {  }
    public addExpense() {
        this.router.navigateByUrl('/new');
    }
}