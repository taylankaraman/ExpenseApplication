import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NewExpenseComponent } from './components/newExpense/newExpense.component';
import { EditExpenseComponent } from './components/editExpense/editExpense.component';

import { EmployeeServices } from './services/services';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        DetailsComponent,
        NewExpenseComponent,
        EditExpenseComponent
    ],
    providers: [EmployeeServices],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'details/:id', component: DetailsComponent },
            { path: 'new', component: NewExpenseComponent },
            { path: 'edit/:id', component: EditExpenseComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
