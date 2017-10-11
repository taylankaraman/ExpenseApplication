import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NewExpenseComponent } from './components/newExpense/newExpense.component';
import { EditExpenseComponent } from './components/editExpense/editExpense.component';
import { NewExpenseFormComponent} from './components/newExpenseForm/newExpenseForm.component';

import { EmployeeService } from "./services/employee-service";
import { ExpenseService } from "./services/expense-service";

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        DetailsComponent,
        NewExpenseComponent,
        EditExpenseComponent,
        NewExpenseFormComponent
    ],
    providers: [
        EmployeeService,
        ExpenseService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'details/:id', component: DetailsComponent },
            { path: 'new', component: NewExpenseComponent },
            { path: 'newform', component: NewExpenseFormComponent },
            { path: 'edit/:id', component: EditExpenseComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
