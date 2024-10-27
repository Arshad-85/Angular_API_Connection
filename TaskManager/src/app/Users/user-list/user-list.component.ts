import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SearchPipe } from '../../pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../../home/home.component';
import { UserService } from '../../Service/user.service';
import { SerachUserPipe } from '../../pipe/serach-user.pipe';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, SerachUserPipe, FormsModule, HomeComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  Users: any[] = [];
  searchText:string = ""
  
  constructor(private userservice: UserService, private router: Router) {
    
  }

  loadUser() {
    this.userservice.getUser().subscribe((data) => {
      this.Users = data;
    });
  }

  ngOnInit(): void {
    this.userservice.getUser().subscribe((data) => {
      this.Users = data;
      this.loadUser();
    });
  }

  OnDelete(id: number) {
    this.userservice.deleteUser(id).subscribe((data) => {
      this.loadUser();
    });
  }

  AddUser(){
    this.router.navigate(['add-user'])
  }

  OnEdit(id:number){
    this.router.navigate(['edit-user',id])
  }
}
