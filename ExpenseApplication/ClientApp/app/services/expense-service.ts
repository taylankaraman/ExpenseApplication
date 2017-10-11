import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ExpenseService {
    constructor(private http: Http) {

    }

    getExpenseList() {
        return this.http.get('http://localhost:54200/api/Expense');
    }

    postData(expObj: any) {
        let headers = new Headers({
            'Content-Type':
                'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:54200/api/Expense', JSON.stringify(expObj), options);
    }
}
