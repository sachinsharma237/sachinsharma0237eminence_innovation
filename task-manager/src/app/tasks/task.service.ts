import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('userId', userId || '');

    return this.http.get<Task[]>(this.apiUrl, { headers });
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  addTask(task: Task): Observable<Task> {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    console.log('userId', userId);
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('userId', userId || '');

    // Ensure the userId is part of the request body
    const taskWithUser = { ...task, user: userId };

    return this.http.post<Task>(this.apiUrl, taskWithUser, { headers });
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('userId', userId || '');
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}
