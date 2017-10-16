import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router'; 

@Component({
    selector: 'expense-detail',
    templateUrl: './details.component.html'
})
export class DetailsComponent {
    private ExpenseId: number;
    public ExpenseDetails: any = {};

    public constructor(private expenseService: ExpenseService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.ExpenseId = params['id'];
        });

        this.expenseService.getExpenseDetails(this.ExpenseId)
            .subscribe((data: Response) => (
                this.ExpenseDetails["receiptNumber"] = data.json().receiptNumber,
                this.ExpenseDetails["receiptDate"] = data.json().receiptDate,
                this.ExpenseDetails["itemDescription"] = data.json().itemDescription,
                this.ExpenseDetails["amount"] = data.json().amount,
                this.ExpenseDetails["reimbursementAmount"] = data.json().reimbursementAmount
            ));
    }
}