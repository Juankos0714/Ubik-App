import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  RegistrationType,
  RegisterWizardState,
  RegisterDataState,
  ClientRegisterData,
  OwnerData,
  EstablishmentInfo
} from './types/register.types';

@Component({
  selector: 'app-register-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-select.html',
  styleUrls: ['./register-select.css']
})
export class RegisterSelect {

  constructor(private router: Router) {}

  // ----------------------
  // ESTADO DEL WIZARD
  // ----------------------
  state: RegisterWizardState = {
    type: null,
    currentStep: 0
  };

  // ----------------------
  // DATA DEL REGISTRO
  // ----------------------
  data: RegisterDataState = {
  client: {},
  establishment: {
    owner: {},
    info: {},
    media: {}
  }
};



  // ----------------------
  // MEDIA (UI)
  // ----------------------
  ownerImages = {
    frontId: null as File | null,
    backId: null as File | null
  };

  establishmentImages: File[] = [];

  // ----------------------
  // HANDLERS DE IMÁGENES
  // ----------------------
  onFrontIdSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.ownerImages.frontId = file;

    this.data.establishment.owner ||= {};
    this.data.establishment.owner.documentFront = file;
  }

  onBackIdSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    this.ownerImages.backId = file;

    this.data.establishment.owner ||= {};
    this.data.establishment.owner.documentBack = file;
  }

  onEstablishmentImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    this.establishmentImages = Array.from(input.files);

    this.data.establishment.media ||= {};
    this.data.establishment.media.gallery = this.establishmentImages;
  }

  // ----------------------
  // GETTERS
  // ----------------------
  get currentStep(): number {
    return this.state.currentStep;
  }

  get type(): RegistrationType | null {
    return this.state.type;
  }

  // ----------------------
  // FLUJO DE PASOS
  // ----------------------
  getTotalSteps(): number {
    if (this.type === 'establecimiento') return 4;
    if (this.type === 'cliente') return 3;
    return 1;
  }

 

  nextStep(): void {
    console.log('DATA ACTUAL:', this.data);
  const total = this.getTotalSteps();

  // 👉 SI ES EL ÚLTIMO STEP → FINALIZAR SIN VALIDAR
  if (this.currentStep === total) {
    this.finishRegister();
    return;
  }

  // 👉 VALIDAR SOLO SI NO ES EL ÚLTIMO
  if (!this.isStepValid()) return;

  this.state.currentStep++;
}


  prevStep(): void {
    if (this.state.currentStep > 0) {
      this.state.currentStep--;

      if (this.state.currentStep === 1) {
        this.state.type = null;
      }
    }
  }

  selectType(tipo: RegistrationType): void {
    this.state.type = tipo;
    this.nextStep();
  }

  // ----------------------
  // FINALIZAR REGISTRO
  // ----------------------
 finishRegister(): void {
  const info = this.data.establishment.info;

  localStorage.setItem(
    'registeredEstablishment',
    JSON.stringify({
      email: info.email,
      password: info.password
    })
  );

  alert('Registro exitoso. Ahora puedes iniciar sesión.');
  this.router.navigate(['/login']);
}

  // ----------------------
  // UI HELPERS
  // ----------------------
  getProgress(): number {
    if (this.currentStep === 0) return 0;
    return (this.currentStep / this.getTotalSteps()) * 100;
  }

  getStepTitle(): string {
    if (this.currentStep === 0) return 'CREAR CUENTA';
    if (this.type === 'establecimiento') return 'CUENTA ESTABLECIMIENTO';
    if (this.type === 'cliente') return 'CUENTA CLIENTE';
    return 'CREAR CUENTA';
  }

  // ----------------------
  // SETTERS
  // ----------------------
  setClientField<K extends keyof ClientRegisterData>(
    field: K,
    value: ClientRegisterData[K]
  ) {
    this.data.client[field] = value;
  }

  setClientBirthDate(
    field: 'day' | 'month' | 'year',
    value: string
  ) {
    this.data.client.birthDate ||= {};
    this.data.client.birthDate[field] = value;
  }

  setOwnerField<K extends keyof OwnerData>(
    field: K,
    value: OwnerData[K]
  ) {
    this.data.establishment.owner ||= {};
    this.data.establishment.owner[field] = value;
  }

  setEstablishmentField<K extends keyof EstablishmentInfo>(
    field: K,
    value: EstablishmentInfo[K]
  ) {
    this.data.establishment.info ||= {};
    this.data.establishment.info[field] = value;
  }

  setMediaFiles(files: FileList | null) {
    if (!files) return;
    this.data.establishment.media = {
      gallery: Array.from(files)
    };
  }

  // ----------------------
  // VALIDACIONES
  // ----------------------
  isStepValid(): boolean {

    if (this.currentStep === 0) {
      return this.type !== null;
    }

    if (this.type === 'cliente') {
      if (this.currentStep === 1) {
        const c = this.data.client;
        return !!(
          c.fullName &&
          c.email &&
          c.password &&
          c.birthDate?.day &&
          c.birthDate?.month &&
          c.birthDate?.year
        );
      }
      if (this.currentStep === 2) return true;
    }

    if (this.type === 'establecimiento') {

      if (this.currentStep === 1) {
        const o = this.data.establishment.owner;
        return !!(
          o?.fullName &&
          o?.email &&
          o?.documentId &&
          o?.documentFront &&
          o?.documentBack
        );
      }

      if (this.currentStep === 2) {
        const i = this.data.establishment.info;
        return !!(
          i?.name &&
          i?.email &&
          i?.rues &&
          i?.rnt &&
          i?.country &&
          i?.department &&
          i?.city &&
          i?.password
        );
      }

      if (this.currentStep === 3) {
        return !!this.data.establishment.media?.gallery?.length;
      }

      if (this.currentStep === 4) return true;
    }

    return false;
  }
}
