import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Inputcomponent),
      multi: true,
    },
  ],
})
export class Inputcomponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() hasToggle: boolean = false;
  @Input() showStrength: boolean = true;
  @Output() toggle: EventEmitter<void> = new EventEmitter();

  value: string = '';
  disabled = false;
  visible = false;

  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
    this.toggle.emit();
  }

  /* =====================
     PASSWORD STRENGTH
  ===================== */

  get strengthScore(): number {
    if (!this.value || this.type !== 'password') return 0;
    let score = 0;
    if (this.value.length >= 8) score++;
    if (/[A-Z]/.test(this.value)) score++;
    if (/[0-9]/.test(this.value)) score++;
    if (/[^A-Za-z0-9]/.test(this.value)) score++;
    return score;
  }

  get strengthLabel(): string {
    switch (this.strengthScore) {
      case 1: return 'Muy débil';
      case 2: return 'Débil';
      case 3: return 'Buena';
      case 4: return 'Fuerte';
      default: return '';
    }
  }

  get strengthSegmentColor(): string {
    switch (this.strengthScore) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-400';
      case 3: return 'bg-yellow-400';
      case 4: return 'bg-green-500';
      default: return 'bg-white/10';
    }
  }

  get strengthLabelColor(): string {
    switch (this.strengthScore) {
      case 1: return 'text-red-400';
      case 2: return 'text-orange-300';
      case 3: return 'text-yellow-300';
      case 4: return 'text-green-400';
      default: return 'text-white/40';
    }
  }

  get passwordStrengthClass(): string {
    if (this.type !== 'password' || !this.value || !this.showStrength) return 'focus:ring-red-600';
    switch (this.strengthScore) {
      case 1: return 'focus:ring-red-500 ring-2 ring-red-500/40';
      case 2: return 'focus:ring-orange-400 ring-2 ring-orange-400/40';
      case 3: return 'focus:ring-yellow-400 ring-2 ring-yellow-400/40';
      case 4: return 'focus:ring-green-500 ring-2 ring-green-500/40';
      default: return 'focus:ring-red-600';
    }
  }
}