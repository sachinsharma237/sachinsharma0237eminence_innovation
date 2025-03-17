import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [NgFor, NgClass, RouterModule],
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data;
    });
  }

  deleteTask(task: any) {
    if (task._id === undefined) {
      console.error('Task ID is undefined, cannot delete');
      return;
    }

    // Proceed with deletion
    console.log('Deleting task with ID:', task.title);
    this.taskService.deleteTask(task._id).subscribe((data) => {
      this.loadTasks();
    });
  }
}
