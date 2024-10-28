import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipe/search.pipe';
import { HomeComponent } from "../../home/home.component";
import { TaskService } from '../../Service/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, SearchPipe, FormsModule, HomeComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  title = 'TaskManager';
  searchText:string = ""

  tasks: any[] = [];

  constructor(private taskSerivce: TaskService , private router:Router) {
    
  }
  loadTask() {
    this.taskSerivce.getTask().subscribe((data) => {
      this.tasks = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.taskSerivce.getTask().subscribe((data) => {
      this.tasks = data;
      this.loadTask();
    });
  }

  OnDelete(id: number) {
    this.taskSerivce.deleteTask(id).subscribe((data) => {
      this.loadTask();
    });
  }
  
  onEdit(id:number){
    this.router.navigate(['/edit',id])
  }
}
