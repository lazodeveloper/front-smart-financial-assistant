import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerLoansService } from '../../services/customer-loans.service';
import { CustomerDataModel } from '../../models/customer.model';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FinancialStrategyModel, Scenario } from '../../models/financial-strategy.model';
import { ChangeDetectorRef } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatTableModule, MatProgressSpinnerModule,
    CommonModule, MatButtonModule, MarkdownComponent],
  templateUrl: './loans.html',
  styleUrl: './loans.scss'
})
export class Loans implements OnInit {
  loanId!: number;
  customerData: CustomerDataModel = {} as CustomerDataModel;
  strategyData: FinancialStrategyModel | null = null;
  minimStrategy: Scenario | null = null;
  optimizedStrategy: Scenario | null = null;
  consolideStrategy: Scenario | null = null;
  isLoadingLoans: boolean = true;
  isLoadingStrategies: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerLoansService: CustomerLoansService,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {

    this.loanId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getCustomer();

  }

  getCustomer() {
    //this.isLoadingLoans = true;

    this.customerLoansService.getCustomerData(this.loanId).subscribe({
      next: (data) => {
        this.isLoadingLoans = false;
        this.customerData = data;

        console.log(data);
        console.log(this.customerData.fullName);
        console.log(this.isLoadingLoans);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error al obtener datos del cliente', err),

    });

  }

  toAssistLoans() {
    this.getFinancialStrategy();
  }

  getFinancialStrategy() {
    this.isLoadingStrategies = true;
    this.customerLoansService.getFinancialStrategy(this.loanId).subscribe({
      next: (data) => {
        this.isLoadingStrategies = false;
        this.strategyData = data;

        this.minimStrategy =
          data.scenarios.find(
            (scenario: Scenario) => scenario.scenarioName === 'minimDebtScenario'
          ) || ({} as Scenario);

        this.optimizedStrategy =
          data.scenarios.find(
            (scenario: Scenario) => scenario.scenarioName === 'optimizedDebtScenario'
          ) || ({} as Scenario);

        this.optimizedStrategy.debtDetails =
          this.optimizedStrategy?.debtDetails?.sort(
            (a, b) => (b?.paymentPriority ?? 0) - (a?.paymentPriority ?? 0)
          ) ?? null;


        this.consolideStrategy =
          data.scenarios.find(
            (scenario: Scenario) => scenario.scenarioName === 'consolidationDebtScenario'
          ) || ({} as Scenario);

        console.log(data);
        this.cdr.detectChanges();

      },
      error: (err) => console.error('Error al obtener datos del cliente', err),

    });
  }

  toHome(){
    this.router.navigate(['/']);
  }
}
