import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { EmployeeService } from "../../services/employee-service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public employeeList = [];
    public constructor(private empService: EmployeeService) {
        this.empService.getEmployeeList()
            .subscribe(
                (data: Response) => (this.employeeList = data.json())
            );
    }
}
