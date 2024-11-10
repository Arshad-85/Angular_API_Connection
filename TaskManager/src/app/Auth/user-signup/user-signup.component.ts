import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HomeComponent } from "../../home/home.component";

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})

export class UserSignupComponent {
}
