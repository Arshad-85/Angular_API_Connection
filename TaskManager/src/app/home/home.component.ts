import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SearchPipe } from '../pipe/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule,SearchPipe,FormsModule, HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private router: Router){}

  GoToUser(){
    this.router.navigate(['toUser'])
  }

  GoToTask(){
    this.router.navigate(['toTask'])
  }

  GoToHome(){
    this.router.navigate(['toHome']);
  }
}
