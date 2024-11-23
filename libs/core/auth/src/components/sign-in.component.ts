import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'lib-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressBarModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  hidePassword = true;
  error = signal<string>('');
  isLoading = signal(false);

  signInForm = this.fb.nonNullable.group({
    email: ['admin@example.com', [Validators.required, Validators.email]],
    password: ['password123', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.isLoading.set(true);
      this.error.set('');

      // Mock authentication
      setTimeout(() => {
        const mockCredentials = {
          email: 'admin@example.com',
          password: 'password123',
        };

        const formValue = this.signInForm.getRawValue();

        if (
          formValue.email === mockCredentials.email &&
          formValue.password === mockCredentials.password
        ) {
          this.authService
            .signIn(formValue.email, formValue.password)
            .subscribe({
              next: () => {
                this.isLoading.set(false);
                console.log('success');
                this.router.navigate(['/home']);
              },
              error: () => {
                this.error.set('An error occurred during sign in');
                this.isLoading.set(false);
              },
            });
        } else {
          this.error.set('Invalid credentials');
          this.isLoading.set(false);
        }
      }, 2000); // Simulate network delay
    }
  }

  getErrorMessage(field: 'email' | 'password'): string {
    const control = this.signInForm.get(field);

    if (control?.hasError('required')) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    if (field === 'email' && control?.hasError('email')) {
      return 'Invalid email format';
    }

    if (field === 'password' && control?.hasError('minlength')) {
      return 'Password must be at least 6 characters';
    }

    return '';
  }
}
