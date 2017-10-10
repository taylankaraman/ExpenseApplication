import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { EmployeeServices } from '../../services/services';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public EmployeeList = [];
    public constructor(private empService: EmployeeServices) {
        this.empService.getEmployeeList()
            .subscribe(
                (data: Response) => (this.EmployeeList = data.json())
            );
    }
}
