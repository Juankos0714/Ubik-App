// registro.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button01 } from '../../components/button-01/button-01';
import { Inputcomponent } from '../../components/input/input';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, Button01, Inputcomponent],
  templateUrl: './register-select.html',
  styleUrls: ['./register-select.css']
})
export class RegisterSelect {
  currentStep: number = 0;
  type: 'establecimiento' | 'cliente' | null = null;

  getTotalSteps(): number {
    if (this.type === 'establecimiento') return 5;
    if (this.type === 'cliente') return 3;
    return 1;
  }

  nextStep(): void {
    const total = this.getTotalSteps();
    if (this.currentStep < total) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      if (this.currentStep === 1) {
        this.type = null;
      }
    }
  }

  selectType(tipo: 'establecimiento' | 'cliente'): void {
    this.type = tipo;
    this.nextStep();
  }

  getProgress(): number {
    if (this.currentStep === 0) return 0;
    const total = this.getTotalSteps();
    return (this.currentStep / total) * 100;
  }

  getStepTitle(): string {
    if (this.currentStep === 0) return 'CREAR CUENTA';
    if (this.type === 'establecimiento') return 'CUENTA ESTABLECIMIENTO';
    if (this.type === 'cliente') return 'CUENTA CLIENTE';
    return 'CREAR CUENTA';
  }
}