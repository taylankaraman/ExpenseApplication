import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ExpenseService } from "../../services/expense-service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public ExpenseList = [];
    public constructor(private expService: ExpenseService) {
        this.expService.getExpenseList()
            .subscribe(
                (data: Response) => (this.ExpenseList = data.json())
            );
    }
}
