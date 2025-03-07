import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email = '';
  password = '';

  login() {
    if (this.email && this.password) {
      localStorage.setItem('user', JSON.stringify({ email: this.email }));
    } else {
      alert('Please enter valid credentials');
    }
  }
}
