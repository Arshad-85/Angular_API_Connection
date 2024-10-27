import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../Service/task.service';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {

  profileForm:FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router){
    this.profileForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      dueDate: [''],
      priority: ['medium']
    })
  }

  onSubmit(){
    let task = this.profileForm.value;
    this.taskService.addTask(task).subscribe(data => {
      this.router.navigate(['toTask'])
    })
  }
}
