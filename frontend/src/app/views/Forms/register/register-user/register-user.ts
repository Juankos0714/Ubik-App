import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Button01 } from '../../../../components/button-01/button-01';
import { Inputcomponent } from '../../../../components/input/input';
import { RegisterService } from '../services/register.service';
import { ClientFormData, ValidationError } from '../types/register.types';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Button01, Inputcomponent],
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
      fullName: [''],
      email: [''],
      birthDate: [''],
      password: [''],
      confirmPassword: ['']
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

    if (values.fullName?.trim()) completed++;
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
    if (this.isSubmitting) return;

    // Limpiar errores previos
    this.validationErrors = [];

    // Parsear fecha de nacimiento
    const birthDate = this.parseBirthDate(this.registerForm.value.birthDate);

    // Preparar datos del formulario
    const formData: ClientFormData = {
      fullName: this.registerForm.value.fullName?.trim() || '',
      email: this.registerForm.value.email?.trim() || '',
      birthDay: birthDate.day,
      birthMonth: birthDate.month,
      birthYear: birthDate.year,
      password: this.registerForm.value.password || '',
      confirmPassword: this.registerForm.value.confirmPassword || ''
    };

    // Validar formulario
    const errors = this.registerService.validateClientForm(formData);
    
    if (errors.length > 0) {
      this.validationErrors = errors;
      return;
    }

    // Enviar registro
    this.isSubmitting = true;

    this.registerService.submitClientRegistration(formData).subscribe({
      next: (result) => {
        if (result.success) {
          console.log('Registro exitoso:', result);
          // Redirigir al login después del registro exitoso
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error('Error en registro:', error);
        this.validationErrors = [{
          field: 'form',
          message: 'Error al procesar el registro. Intente nuevamente.'
        }];
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  /**
   * Limpia el error de un campo específico
   */
  clearFieldError(fieldName: string): void {
    this.validationErrors = this.validationErrors.filter(e => e.field !== fieldName);
  }
}