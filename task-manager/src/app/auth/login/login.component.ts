import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.http.post('http://localhost:5000/api/auth/login', this.loginForm.value).subscribe({
        next: (response: any) => {
          console.log(response)
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user._id);
          alert('Login successful!');
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          alert('Login failed: ' + err.error.message);
        }
      });
    }
  }
}
