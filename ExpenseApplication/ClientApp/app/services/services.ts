import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmployeeServices {
    constructor(private http: Http) {
       
    }
    getEmployeeList() {
        return this.http.get('http://localhost:54200/api/Expense');
    }
}