import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from '../../core/services/Cloudinary.service';

interface PickerItem {
  file: File;
  previewUrl: string;
  uploading: boolean;
  uploadedUrl: string;
  error: string;
}

@Component({
  selector: 'app-image-picker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="image-picker">
      <label class="picker-label">{{ label }}</label>

      <div
        class="drop-zone"
        [class.has-images]="items.length > 0"
        (click)="fileInput.click()"
        (dragover)="$event.preventDefault()"
        (drop)="onDrop($event)"
      >
        <ng-container *ngIf="items.length === 0">
          <div class="drop-icon">&#128247;</div>
          <p>Haz clic o arrastra imágenes aquí</p>
          <small>JPG, PNG, WEBP — máx. {{ maxSizeMB }}MB c/u</small>
        </ng-container>

        <div class="preview-grid" *ngIf="items.length > 0" (click)="$event.stopPropagation()">
          <div class="preview-item" *ngFor="let item of items; let i = index">
            <img [src]="item.previewUrl" alt="preview" />
            <div class="overlay loading-ov" *ngIf="item.uploading">
              <div class="spinner"></div>
            </div>
            <div class="overlay error-ov" *ngIf="item.error && !item.uploading">
              <span>&#9888;</span>
            </div>
            <div class="overlay success-ov" *ngIf="item.uploadedUrl && !item.uploading">
              <span>&#10003;</span>
            </div>
            <button class="remove-btn" (click)="removeItem(i)" type="button">&#x2715;</button>
          </div>

          <div class="add-more" (click)="fileInput.click()" *ngIf="items.length < maxImages">
            <span>+</span>
          </div>
        </div>
      </div>

      <input
        #fileInput
        type="file"
        accept="image/*"
        multiple
        style="display:none"
        (change)="onFilesSelected($event)"
      />

      <div class="status-bar" *ngIf="items.length > 0">
        <span class="count">{{ uploadedCount() }}/{{ items.length }} subidas</span>
        <span class="uploading-msg" *ngIf="isUploading()">Subiendo...</span>
        <span class="done-msg" *ngIf="!isUploading() && uploadedCount() === items.length">Listas &#10003;</span>
      </div>

      <div class="validation-error" *ngIf="validationError">{{ validationError }}</div>
    </div>
  `,
  styles: [`
    .image-picker { display: flex; flex-direction: column; gap: 6px; }
    .picker-label { font-size: 14px; font-weight: 600; color: #374151; }
    .drop-zone {
      border: 2px dashed #d1d5db; border-radius: 10px; padding: 24px;
      text-align: center; cursor: pointer; min-height: 100px;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
    }
    .drop-zone:hover { border-color: #6366f1; }
    .drop-zone.has-images { padding: 12px; }
    .drop-icon { font-size: 32px; margin-bottom: 8px; }
    p { margin: 4px 0; color: #6b7280; font-size: 14px; }
    small { color: #9ca3af; font-size: 12px; }
    .preview-grid { display: flex; flex-wrap: wrap; gap: 8px; width: 100%; }
    .preview-item {
      position: relative; width: 90px; height: 90px;
      border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb;
    }
    .preview-item img { width: 100%; height: 100%; object-fit: cover; }
    .overlay {
      position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      display: flex; align-items: center; justify-content: center; font-size: 20px;
    }
    .loading-ov { background: rgba(0,0,0,0.5); }
    .error-ov   { background: rgba(220,38,38,0.5); }
    .success-ov { background: rgba(22,163,74,0.3); color: white; font-weight: bold; }
    .spinner {
      width: 24px; height: 24px;
      border: 3px solid rgba(255,255,255,0.3);
      border-top-color: white; border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .remove-btn {
      position: absolute; top: 2px; right: 2px; width: 20px; height: 20px;
      border-radius: 50%; border: none; background: rgba(0,0,0,0.6);
      color: white; font-size: 10px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
    }
    .remove-btn:hover { background: #ef4444; }
    .add-more {
      width: 90px; height: 90px; border: 2px dashed #d1d5db;
      border-radius: 8px; display: flex; align-items: center;
      justify-content: center; font-size: 28px; color: #9ca3af; cursor: pointer;
    }
    .add-more:hover { border-color: #6366f1; color: #6366f1; }
    .status-bar { display: flex; gap: 12px; font-size: 13px; align-items: center; }
    .count { color: #6b7280; }
    .uploading-msg { color: #f59e0b; }
    .done-msg { color: #16a34a; }
    .validation-error { color: #dc2626; font-size: 13px; }
  `]
})
export class ImagePickerComponent implements OnDestroy {
  @Input() label     = 'Imágenes';
  @Input() folder    = 'motels';
  @Input() maxImages = 10;
  @Input() maxSizeMB = 5;

  @Output() urlsChange = new EventEmitter<string[]>();

  items: PickerItem[]  = [];
  validationError      = '';

  constructor(private cloudinary: CloudinaryService) {}

  isUploading(): boolean {
    return this.items.some(function(i) { return i.uploading; });
  }

  uploadedCount(): number {
    return this.items.filter(function(i) { return !!i.uploadedUrl; }).length;
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.processFiles(Array.from(input.files));
      input.value = '';
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      this.processFiles(Array.from(event.dataTransfer.files));
    }
  }

  private processFiles(files: File[]): void {
    this.validationError = '';
    const slots = this.maxImages - this.items.length;
    if (slots <= 0) {
      this.validationError = 'Máximo ' + this.maxImages + ' imágenes permitidas.';
      return;
    }

    const toProcess = files.slice(0, slots);

    for (let i = 0; i < toProcess.length; i++) {
      const file = toProcess[i];
      if (!this.cloudinary.isValidImage(file)) {
        this.validationError = file.name + ': usa JPG, PNG o WEBP.';
        continue;
      }
      if (!this.cloudinary.isValidSize(file, this.maxSizeMB)) {
        this.validationError = file.name + ': excede ' + this.maxSizeMB + 'MB.';
        continue;
      }

      const item: PickerItem = {
        file:        file,
        previewUrl:  this.cloudinary.createPreview(file),
        uploading:   true,
        uploadedUrl: '',
        error:       '',
      };

      this.items.push(item);
      this.uploadItem(item);
    }
  }

  private uploadItem(item: PickerItem): void {
    this.cloudinary.uploadFile(item.file, this.folder).subscribe({
      next: (url: string) => {
        item.uploading   = false;
        item.uploadedUrl = url;
        this.emitUrls();
      },
      error: (err: unknown) => {
        item.uploading = false;
        item.error     = 'Error al subir';
        console.error('Upload error:', err);
      },
    });
  }

  removeItem(index: number): void {
    const item = this.items[index];
    this.cloudinary.revokePreview(item.previewUrl);
    this.items.splice(index, 1);
    this.emitUrls();
  }

  private emitUrls(): void {
    const urls = this.items
      .filter(function(i) { return !!i.uploadedUrl; })
      .map(function(i) { return i.uploadedUrl; });
    this.urlsChange.emit(urls);
  }

  ngOnDestroy(): void {
    const svc = this.cloudinary;
    this.items.forEach(function(i) { svc.revokePreview(i.previewUrl); });
  }
}