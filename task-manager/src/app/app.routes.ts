import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { TaskListComponent } from './components/task-list/task-list.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];
