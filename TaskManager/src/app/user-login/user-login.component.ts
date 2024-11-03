import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,HomeComponent,RouterOutlet, RouterModule,],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {


}
