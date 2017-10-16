import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ExpenseService {
    constructor(private http: Http) {

    }

    getExpenseList() {
        return this.http.get('http://localhost:54200/api/Expense');
    }

    getExpenseDetails(expenseId: any) {
        return this.http.get('http://localhost:54200/api/Expense/' + expenseId);
    }  

    postData(expObj: any) {
        let headers = new Headers({
            'Content-Type':
                'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:54200/api/Expense', JSON.stringify(expObj), options);
    }

    removeExpenseDetails(expenseId: any) {
        let headers = new Headers({
            'Content-Type':
                'application/json; charset=utf-8'
        });
        return this.http.delete('http://localhost:54200/api/Expense', new RequestOptions({
            headers: headers,
            body: expenseId
        }));
    }  

    editExpenseData(expObj: any) {
        let headers = new Headers({
            'Content-Type':
                'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.put('http://localhost:54200/api/Expense', JSON.stringify(expObj), options);
    }
}
