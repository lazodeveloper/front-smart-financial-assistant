import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDataModel } from '../models/customer.model';
import { FinancialStrategyModel } from '../models/financial-strategy.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoansService {
  private apiUrlCustomer = "https://api-smart-financial-assistant.azurewebsites.net/financial-strategy/customers/1";
  private apiUrlStrategy = 'http://localhost:8080/financial-strategy/strategies'; 
  //private apiUrlCustomer = 'http://localhost:8080/financial-strategy/customers';

  constructor(private http: HttpClient) {}

  getCustomerData(customerId: number): Observable<CustomerDataModel> {
    const url = `${this.apiUrlCustomer}/${customerId}`;
    return this.http.get<CustomerDataModel>(url);
  }

   getFinancialStrategy(customerId: number): Observable<FinancialStrategyModel> {
    return this.http.get<FinancialStrategyModel>(`${this.apiUrlStrategy}/${customerId}`);
  }
}
