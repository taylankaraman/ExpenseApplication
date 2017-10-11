import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class EmployeeService {
    constructor(private http: Http) {
       
    }

    getEmployeeList() {
        return this.http.get('http://localhost:54200/api/Employee');
    }

    postData(empObj: any) {
        let headers = new Headers({
            'Content-Type':
                'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:54200/api/Employee', JSON.stringify(empObj), options);
    }  
}
