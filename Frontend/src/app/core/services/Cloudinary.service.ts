import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
}

@Injectable({ providedIn: 'root' })
export class CloudinaryService {
  private http: HttpClient;
  private cloudName: string;
  private uploadPreset: string;
  private baseFolder: string;

  constructor(handler: HttpBackend) {
    // HttpBackend omite todos los interceptores → nunca envía JWT a Cloudinary
    this.http         = new HttpClient(handler);
    this.cloudName    = environment.cloudinary.cloudName;
    this.uploadPreset = environment.cloudinary.uploadPreset;
    this.baseFolder   = environment.cloudinary.folder;
  }

  // ─── Upload único ────────────────────────────────────────────────────────────
uploadFile(file: File, folderSuffix: string): Observable<string> {
  const resource  = file.type.startsWith('image/') ? 'image' : 'raw';
  const url       = 'https://api.cloudinary.com/v1_1/' + this.cloudName + '/' + resource + '/upload';
  const publicId  = this.baseFolder + '/' + folderSuffix + '/' + Date.now() + '_' + file.name.replace(/\s+/g, '_');

  const body = new FormData();
  body.append('file',          file);
  body.append('upload_preset', this.uploadPreset);
  body.append('public_id',     publicId);   

  return this.http
    .post<CloudinaryResponse>(url, body)
    .pipe(map(res => res.secure_url));
}

  // ─── Upload múltiple (falla silenciosa por archivo) ──────────────────────────
  uploadMultiple(files: File[], folderSuffix: string): Observable<string[]> {
    if (!files || files.length === 0) { return of([]); }

    const uploads: Observable<string>[] = files.map((file) =>
      this.uploadFile(file, folderSuffix).pipe(
        catchError(function() { return of(''); })
      )
    );

    return forkJoin(uploads).pipe(
      map(function(urls) { return urls.filter(function(u) { return u !== ''; }); })
    );
  }

  // ─── Helpers ────────────────────────────────────────────────────────────────
  isValidImage(file: File): boolean {
    return ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].indexOf(file.type) !== -1;
  }

  isValidSize(file: File, maxMB: number): boolean {
    return file.size <= maxMB * 1024 * 1024;
  }

  createPreview(file: File): string {
    return URL.createObjectURL(file);
  }

  revokePreview(url: string): void {
    URL.revokeObjectURL(url);
  }
}