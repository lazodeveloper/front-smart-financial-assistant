import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDataModel } from '../models/customer.model';
import { FinancialStrategyModel } from '../models/financial-strategy.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerLoansService {

  private apiUrlCustomer = "https://api-smart-financial-assistant.azurewebsites.net/financial-strategy/customers";
  private apiUrlStrategy = 'https://api-smart-financial-assistant.azurewebsites.net/financial-strategy/strategies';
  private apiUrlAssistant = "https://api-smart-financial-assistant.azurewebsites.net/financial-strategy/assistant";

  //private apiUrlCustomer = 'http://localhost:8080/financial-strategy/customers';
  //private apiUrlStrategy = 'http://localhost:8080/financial-strategy/strategies';
  //private apiUrlAssistant = 'http://localhost:8080/financial-strategy/assistant';

  constructor(private http: HttpClient) { }

  getCustomerData(customerId: number): Observable<CustomerDataModel> {
    const url = `${this.apiUrlCustomer}/${customerId}`;
    return this.http.get<CustomerDataModel>(url);
  }

  getFinancialStrategy(customerId: number): Observable<FinancialStrategyModel> {
    return this.http.get<FinancialStrategyModel>(`${this.apiUrlStrategy}/${customerId}`);
  }

  getAssistant(prompt: string): Observable<AssistantModel> {
   // const url = `${this.apiUrlAssistant}`; // ya no concatenes el prompt al final
    return this.http.post<AssistantModel>(this.apiUrlAssistant, prompt, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

}
