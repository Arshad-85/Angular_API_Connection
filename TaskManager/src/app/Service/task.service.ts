import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTask(){
    return this.http.get<Task[]>('http://localhost:5274/api/TaskItems')
  }
  getTaskById(id:number){
    return this.http.get<Task>('http://localhost:5274/api/TaskItems/' + id)
  }
  addTask(task:Task){
    return this.http.post<Task>('http://localhost:5274/api/TaskItems', task)
  }
  updateTask(id:number, task:Task){
    return this.http.put<Task>('http://localhost:5274/api/TaskItems/' + id, task  )
  }
  deleteTask(id:number){
    return this.http.delete('http://localhost:5274/api/TaskItems/' + id)
  }
}

export interface Task{
  id:number,
  title:string,
  description:string,
  dueDate:string,
  priority:string,
  assigneeId: number,
  assignee?:User
}
