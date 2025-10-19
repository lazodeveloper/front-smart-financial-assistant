import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Loans } from './components/loans/loans';

export const routes: Routes = [
     {
    path: '',
    component: Home,
  },
  {
    path: 'loan-detail/:id',
    component: Loans,
  },
];
