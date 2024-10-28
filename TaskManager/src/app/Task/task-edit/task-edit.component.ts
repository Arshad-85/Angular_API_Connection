import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Task, TaskService } from '../../Service/task.service';
import { User, UserService } from '../../Service/user.service';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit{

  profileForm1: FormGroup;
  taskid: number;
  currentTask! : Task;
  Users:User[] = []

  constructor(private route: ActivatedRoute, private taskservice: TaskService, private ab: FormBuilder, private router: Router , private userService : UserService){
    this.profileForm1 = this.ab.group({
      title:['',[Validators.required]],
      description:[''],
      dueDate:[''],
      priority:[''],
      assigneeId:['']
    })

    let id = this.route.snapshot.paramMap.get('id');
    this.taskid = Number(id);
  }

  ngOnInit(): void{
      this.taskservice.getTaskById(this.taskid).subscribe(data => {
        data.dueDate = new Date(data.dueDate).toISOString().slice(0,10);
        console.log(data);
        this.profileForm1.patchValue(data);
      })
      this.userService.getUser().subscribe(data =>{
         this.Users = data;
      })
  }

  onSubmit(){
    let task = this.profileForm1.value;
    task.id = this.taskid
    this.taskservice.updateTask(this.taskid,task).subscribe(data => {
      this.router.navigate(['toTask'])
    })
  }

}
