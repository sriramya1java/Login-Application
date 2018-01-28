import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';
import {UserLogin} from "./user-login/userlogin";
import {Schedule} from "./homepage/schedule";


@Injectable()
export class DataService {

  private customersUrl = 'customer';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  private userLoginUrl = 'userlogin';

  constructor(private http: Http) {}

  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }

  getCustomersByLastName(lastName: string): Promise<Customer[]> {
    const url = `findbylastname/${lastName}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

  create(customer: Customer): Promise<Customer> {
    return this.http
      .post("postcustomer", JSON.stringify(customer), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Customer)
      .catch(this.handleError);
  }

  generateBatchFile(schedule: Schedule): Promise<Schedule> {
    return this.http
      .post("createschedule", JSON.stringify(schedule), {headers: this.headers})
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  validate(userDetails: UserLogin): Promise<Customer> {
    return this.http
      .post("logincustomer", JSON.stringify(userDetails), {headers : this.headers})
      .toPromise()
      .then(response => response)
  .catch(this.handleError);
  }

  register(userRegistration) {
    return this.http
      .post("postregister", JSON.stringify(userRegistration), {headers : this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }



  delete(id: number): Promise<void> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
