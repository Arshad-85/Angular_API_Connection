import { Routes } from '@angular/router';
import { TaskListComponent } from './Task/task-list/task-list.component';
import { TaskAddComponent } from './Task/task-add/task-add.component';
import { TaskEditComponent } from './Task/task-edit/task-edit.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './Users/user-edit/user-edit.component';
import { UserListComponent } from './Users/user-list/user-list.component';
import { UserAddComponent } from './Users/user-add/user-add.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add', component: TaskAddComponent },
    { path: 'edit/:id', component: TaskEditComponent },
    { path: 'toTask', component: TaskListComponent},
    { path: 'toUser', component: UserListComponent},
    { path: 'toHome', component: UserLoginComponent},
    { path: 'add-user', component: UserAddComponent},
    { path: 'edit-user/:id', component: UserEditComponent}
];


