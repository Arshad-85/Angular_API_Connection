import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../Service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  profileForm1:FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router){
    this.profileForm1 = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      phoneNumber: [''],
      password: ['']
    })
  }
  onSubmit(){
    let task = this.profileForm1.value;
    this.userService.addUser(task).subscribe(data => {
      this.router.navigate(['toUser'])
    })
  }
}

  