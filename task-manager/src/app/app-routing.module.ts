import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
