import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<User[]>('http://localhost:5274/api/Users') 
  }
  getUserById(id:number){
    return this.http.get<User>('http://localhost:5274/api/Users/' + id)
  }
  addUser(User:User){
    return this.http.post<User>('http://localhost:5274/api/Users', User)
  }
  updateUser(id:number, user:User){
    return this.http.put<User>('http://localhost:5274/api/Users/' + id, user)
  }
  deleteUser(id:number){
    return this.http.delete('http://localhost:5274/api/Users/' + id)
  }
}

export interface User{
  id:number,
  name:string,
  email:string,
  password:string,
  phoneNumber:string
  address?:Address
  tasks?:Task[]
}

export interface Address{
  id : number
  addressLine1:string,
  addressLine2:string,
  city:string;
  country:string,
  userId:number
}

