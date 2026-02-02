import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button01 } from '../../../../../components/button-01/button-01';
import { Inputcomponent } from '../../../../../components/input/input';
import { RegisterService } from '../services/services';
import { ValidationError } from '../types/register-user.types';
import { RegisterUserPayload } from '../types/register-user-payload.types';
import { RegisterFormData } from '../types/register-user.types';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,Inputcomponent],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser implements OnInit {
  registerForm: FormGroup;
  validationErrors: ValidationError[] = [];
  isSubmitting = false;
  progress = 10;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      birthDate: [''],
      password: [''],
      confirmPassword: [''],
      anonymous: [false]
    });
  }

  ngOnInit(): void {
    // Calcular progreso basado en campos completados
    this.registerForm.valueChanges.subscribe(() => {
      this.updateProgress();
    });
  }

  /**
   * Actualiza la barra de progreso según campos completados
   */
  updateProgress(): void {
    const values = this.registerForm.value;
    let completed = 0;
    const totalFields = 5;

    if (values.username?.trim()) completed++;
    if (values.email?.trim()) completed++;
    if (values.birthDate) completed++;
    if (values.password?.trim()) completed++;
    if (values.confirmPassword?.trim()) completed++;

    this.progress = Math.round((completed / totalFields) * 100);
  }

  /**
   * Obtiene error para un campo específico
   */
  getFieldError(fieldName: string): string | null {
    const error = this.validationErrors.find(e => e.field === fieldName);
    return error ? error.message : null;
  }

  /**
   * Convierte fecha de input date a día, mes, año separados
   */
  parseBirthDate(dateString: string): { day: string; month: string; year: string } {
    if (!dateString) return { day: '', month: '', year: '' };
    
    const date = new Date(dateString);
    return {
      day: String(date.getDate()).padStart(2, '0'),
      month: String(date.getMonth() + 1).padStart(2, '0'),
      year: String(date.getFullYear())
    };
  }

  /**
   * Maneja el envío del formulario
   */

  onSubmit(): void {
    console.log('SUBMIT', this.registerForm.value);

    if (this.isSubmitting) return;
    this.validationErrors = [];

    // 🚫 validar mayoría de edad SOLO frontend
    if (!this.isAdult(this.registerForm.value.birthDate)) {
      this.validationErrors.push({
        field: 'birthDate',
        message: 'Debes ser mayor de 18 años',
      });
      return;
    }

    const formData: RegisterFormData = {
      username: this.registerForm.value.username.trim(),
      email: this.registerForm.value.email.trim(),
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword,
      anonymous: this.registerForm.value.anonymous ?? false,
      roleId: 3,
    };

    // ✅ validar frontend
    const errors = this.registerService.validateClientForm(formData);
    console.log('VALIDATION ERRORS', errors);
    if (errors.length > 0) {
      this.validationErrors = errors;
      return;
    }

    this.isSubmitting = true;

    // 🚀 ÚNICO request al backend
    this.registerService.submitClientRegistration(formData).subscribe({
      next: token => {
        console.log('🟢 REGISTER OK - TOKEN', token);
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error('🔴 REGISTER ERROR', err);
      }
    });
  }

  /**
   * Limpia el error de un campo específico
  */
 
  clearFieldError(fieldName: string): void {
    this.validationErrors = this.validationErrors.filter(e => e.field !== fieldName);
  }

  /** Verifica si la fecha de nacimiento indica mayoría de edad */

  isAdult(birthDateString: string): boolean {
    if (!birthDateString) return false;

    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age >= 18;
  }

}