import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule], // Import necessary modules
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { title: 'Task 1', status: 'Pending' },
    { title: 'Task 2', status: 'Completed' }
  ];
}
