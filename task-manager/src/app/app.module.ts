import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    AuthComponent,
    TaskListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
