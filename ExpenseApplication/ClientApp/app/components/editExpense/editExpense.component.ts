import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { ExpenseService } from '../../services/expense-service';
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'edit-expense',
    templateUrl: './editExpense.component.html'
})
export class EditExpenseComponent {
    private ExpenseId: number;
    public formData: FormGroup;

    public constructor(private expService: ExpenseService, private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.ExpenseId = params['id'];
        });

        this.formData = new FormGroup({
            "ExpenseId": new FormControl("", Validators.required),
            "ReceiptNumber": new FormControl("", Validators.required),
            "ReceiptDate": new FormControl("", Validators.required),
            "ItemDescription": new FormControl("", Validators.required),
            "Amount": new FormControl("", Validators.required),
            "ReimbursementAmount": new FormControl("", Validators.required)
        });

        this.expService.getExpenseDetails(this.ExpenseId)
            .subscribe((data: Response) => (
                this.formData.patchValue({ ExpenseId: data.json().expenseId }),
                this.formData.patchValue({ ReceiptNumber: data.json().receiptNumber }),
                this.formData.patchValue({ ReceiptDate: data.json().receiptDate }),
                this.formData.patchValue({ ItemDescription: data.json().itemDescription }),
                this.formData.patchValue({ Amount: data.json().amount }),
                this.formData.patchValue({ ReimbursementAmount: data.json().reimbursementAmount })
            ));  
        
    }

    submitData() {
       if (this.formData.valid) {
            var Obj = {
                ExpenseId: this.formData.value.ExpenseId,
                ReceiptNumber: this.formData.value.ReceiptNumber,
                ReceiptDate: this.formData.value.ReceiptDate,
                ItemDescription: this.formData.value.ItemDescription,
                Amount: this.formData.value.Amount,
                ReimbursementAmount: this.formData.value.ReimbursementAmount,
            };
            this.expService.editExpenseData(Obj)
                .subscribe(data => {alert("Employee Updated Successfully")});
           this.router.navigateByUrl('/home');
       }
    }
}