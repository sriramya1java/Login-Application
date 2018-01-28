import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomersComponent} from './customers/customers.component';
import {SearchCustomersComponent} from './search-customers/search-customers.component';
import {UserLoginComponent} from './user-login/user-login.component';

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {TaskComponent} from "./task/task.component";

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', component: CustomersComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbylastname', component: SearchCustomersComponent},
  {path: 'userLogin', component:UserLoginComponent},
  {path: 'userRegistration', component:UserRegistrationComponent},
  {path: 'schedule', component: HomepageComponent},
  {path: 'task', component: TaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
