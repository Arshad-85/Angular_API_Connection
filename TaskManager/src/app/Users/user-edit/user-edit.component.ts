import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})


export class UserEditComponent implements OnInit{
 profileForm1: FormGroup;
 userid: number;

 constructor(private route: ActivatedRoute, private userService: UserService, private ab: FormBuilder, private router: Router){
  this.profileForm1 = this.ab.group({
    name:['',[Validators.required]],
    email:[''],
    phoneNumber:[''],
    password:['']
  })

  let id = this.route.snapshot.paramMap.get('id');
  this.userid = Number(id);

 }
 
 ngOnInit(): void{
  this.userService.getUserById(this.userid).subscribe(data => {
    this.profileForm1.patchValue(data);
  })
  }

  onSubmit(){
    let user = this.profileForm1.value;
    user.id = this.userid
    this.userService.updateUser(this.userid,user).subscribe(data => {
      this.router.navigate(['toUser'])
    })
  }

}

  