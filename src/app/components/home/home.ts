import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(
    private router: Router,

  ) {}

  toLoanDetail(id: number): void {
    this.router.navigate(['loan-detail', id]);
  }

}
