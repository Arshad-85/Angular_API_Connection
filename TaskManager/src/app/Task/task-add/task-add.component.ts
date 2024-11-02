import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../Service/task.service';
import { User, UserService } from '../../Service/user.service';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit{

  profileForm:FormGroup;
  Users:User[] = []
  
  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private userService: UserService){
    this.profileForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['medium'],
      assigneeId: [''],
      checkLists: this.fb.array([])
    })
  }

  get myCheckList() :FormArray{
    return this.profileForm.get('checkLists') as FormArray
  }

  ngOnInit(): void {
   this.userService.getUser().subscribe((data) => {
    this.Users = data;
    console.log(data);
   })
  }

  onSubmit(){
    let task = this.profileForm.value;
    console.log(task);
    this.taskService.addTask(task).subscribe(data => {
      this.router.navigate(['toTask'])
    })
  }

  removeChecklist(index:number){
    this.myCheckList.removeAt(index);
  }

  addChecklist(){
    this.myCheckList.push(this.fb.group({
      name: [''],
      isDone: [false]
    }))
  }
}
