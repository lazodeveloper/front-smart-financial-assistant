import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loans } from './components/loans/loans';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('front-smart-financial-assistant');
}
