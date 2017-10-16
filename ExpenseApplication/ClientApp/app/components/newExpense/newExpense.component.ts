import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense-service';

@Component({
    selector: 'new-expense',
    templateUrl: './newExpense.component.html'
})
export class NewExpenseComponent {
    public formData: FormGroup;

    public constructor(private expService: ExpenseService, private router: Router) {
        this.formData = new FormGroup({
            "ReceiptNumber": new FormControl("", Validators.required),
            "ReceiptDate": new FormControl("", Validators.required),
            "ItemDescription": new FormControl("", Validators.required),
            "Amount": new FormControl("", Validators.required),
            "ReimbursementAmount": new FormControl("", Validators.required)
        });

    }

    submitData() {
        if (this.formData.valid) {
            var Obj = {
                ReceiptNumber: this.formData.value.ReceiptNumber,
                ReceiptDate: this.formData.value.ReceiptDate,
                ItemDescription: this.formData.value.ItemDescription,
                Amount: this.formData.value.Amount,
                ReimbursementAmount: this.formData.value.ReimbursementAmount,
            };

            this.expService.postData(Obj).subscribe();
            this.router.navigateByUrl('/home');
        }
    };
}