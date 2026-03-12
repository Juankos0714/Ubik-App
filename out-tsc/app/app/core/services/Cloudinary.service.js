import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CloudinaryService {
    http;
    cloudName;
    uploadPreset;
    baseFolder;
    constructor(handler) {
        // HttpBackend omite todos los interceptores → nunca envía JWT a Cloudinary
        this.http = new HttpClient(handler);
        this.cloudName = environment.cloudinary.cloudName;
        this.uploadPreset = environment.cloudinary.uploadPreset;
        this.baseFolder = environment.cloudinary.folder;
    }
    // ─── Upload único ────────────────────────────────────────────────────────────
    safeName(name) {
        return name
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quita tildes
            .replace(/\s+/g, '_')
            .replace(/[^a-zA-Z0-9_.-]/g, '')
            .slice(0, 80);
    }
    uploadFile(file, folderSuffix) {
        const resource = file.type.startsWith('image/') ? 'image' : 'raw';
        const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/${resource}/upload`;
        const rand = Math.random().toString(36).slice(2, 8);
        const publicId = `${this.baseFolder}/${folderSuffix}/${Date.now()}_${rand}_${this.safeName(file.name)}`;
        const body = new FormData();
        body.append('file', file);
        body.append('upload_preset', this.uploadPreset);
        body.append('public_id', publicId);
        return this.http.post(url, body).pipe(map(res => res.secure_url));
    }
    // ─── Upload múltiple (falla silenciosa por archivo) ──────────────────────────
    uploadMultiple(files, folderSuffix) {
        if (!files?.length)
            return of([]);
        const uploads = files.map(file => this.uploadFile(file, folderSuffix).pipe(catchError(err => {
            console.warn('[Cloudinary] Falló:', file.name, err);
            return of(null);
        })));
        return forkJoin(uploads).pipe(map(urls => urls.filter((u) => !!u)));
    }
    // ─── Helpers ────────────────────────────────────────────────────────────────
    isValidImage(file) {
        return ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].indexOf(file.type) !== -1;
    }
    isValidSize(file, maxMB) {
        return file.size <= maxMB * 1024 * 1024;
    }
    createPreview(file) {
        return URL.createObjectURL(file);
    }
    revokePreview(url) {
        URL.revokeObjectURL(url);
    }
    static ɵfac = function CloudinaryService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CloudinaryService)(i0.ɵɵinject(i1.HttpBackend)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CloudinaryService, factory: CloudinaryService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CloudinaryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpBackend }], null); })();
