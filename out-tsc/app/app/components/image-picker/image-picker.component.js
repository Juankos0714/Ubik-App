import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../core/services/Cloudinary.service";
import * as i2 from "@angular/common";
function ImagePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtext(2, "\uD83D\uDCF7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Haz clic o arrastra im\u00E1genes aqu\u00ED");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("JPG, PNG, WEBP \u2014 m\u00E1x. ", ctx_r2.maxSizeMB, "MB c/u");
} }
function ImagePickerComponent_div_5_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "div", 20);
    i0.ɵɵelementEnd();
} }
function ImagePickerComponent_div_5_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "span");
    i0.ɵɵtext(2, "\u26A0");
    i0.ɵɵelementEnd()();
} }
function ImagePickerComponent_div_5_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "span");
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd()();
} }
function ImagePickerComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "img", 14);
    i0.ɵɵtemplate(2, ImagePickerComponent_div_5_div_1_div_2_Template, 2, 0, "div", 15)(3, ImagePickerComponent_div_5_div_1_div_3_Template, 3, 0, "div", 16)(4, ImagePickerComponent_div_5_div_1_div_4_Template, 3, 0, "div", 17);
    i0.ɵɵelementStart(5, "button", 18);
    i0.ɵɵlistener("click", function ImagePickerComponent_div_5_div_1_Template_button_click_5_listener() { const i_r6 = i0.ɵɵrestoreView(_r5).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.removeItem(i_r6)); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", item_r7.previewUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r7.uploading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r7.error && !item_r7.uploading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r7.uploadedUrl && !item_r7.uploading);
} }
function ImagePickerComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵlistener("click", function ImagePickerComponent_div_5_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); i0.ɵɵnextContext(2); const fileInput_r2 = i0.ɵɵreference(7); return i0.ɵɵresetView(fileInput_r2.click()); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "+");
    i0.ɵɵelementEnd()();
} }
function ImagePickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function ImagePickerComponent_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r4); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵtemplate(1, ImagePickerComponent_div_5_div_1_Template, 7, 4, "div", 11)(2, ImagePickerComponent_div_5_div_2_Template, 3, 0, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.items);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.items.length < ctx_r2.maxImages);
} }
function ImagePickerComponent_div_8_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1, "Subiendo...");
    i0.ɵɵelementEnd();
} }
function ImagePickerComponent_div_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵtext(1, "Listas \u2713");
    i0.ɵɵelementEnd();
} }
function ImagePickerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "span", 25);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ImagePickerComponent_div_8_span_3_Template, 2, 0, "span", 26)(4, ImagePickerComponent_div_8_span_4_Template, 2, 0, "span", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r2.uploadedCount(), "/", ctx_r2.items.length, " subidas");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isUploading());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isUploading() && ctx_r2.uploadedCount() === ctx_r2.items.length);
} }
function ImagePickerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.validationError);
} }
export class ImagePickerComponent {
    cloudinary;
    label = 'Imágenes';
    folder = 'motels';
    maxImages = 10;
    maxSizeMB = 5;
    urlsChange = new EventEmitter();
    items = [];
    validationError = '';
    constructor(cloudinary) {
        this.cloudinary = cloudinary;
    }
    isUploading() {
        return this.items.some(function (i) { return i.uploading; });
    }
    uploadedCount() {
        return this.items.filter(function (i) { return !!i.uploadedUrl; }).length;
    }
    onFilesSelected(event) {
        const input = event.target;
        if (input.files) {
            this.processFiles(Array.from(input.files));
            input.value = '';
        }
    }
    onDrop(event) {
        event.preventDefault();
        if (event.dataTransfer) {
            this.processFiles(Array.from(event.dataTransfer.files));
        }
    }
    processFiles(files) {
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
            const item = {
                file: file,
                previewUrl: this.cloudinary.createPreview(file),
                uploading: true,
                uploadedUrl: '',
                error: '',
            };
            this.items.push(item);
            this.uploadItem(item);
        }
    }
    uploadItem(item) {
        this.cloudinary.uploadFile(item.file, this.folder).subscribe({
            next: (url) => {
                item.uploading = false;
                item.uploadedUrl = url;
                this.emitUrls();
            },
            error: (err) => {
                item.uploading = false;
                item.error = 'Error al subir';
                console.error('Upload error:', err);
            },
        });
    }
    removeItem(index) {
        const item = this.items[index];
        this.cloudinary.revokePreview(item.previewUrl);
        this.items.splice(index, 1);
        this.emitUrls();
    }
    emitUrls() {
        const urls = this.items
            .filter(function (i) { return !!i.uploadedUrl; })
            .map(function (i) { return i.uploadedUrl; });
        this.urlsChange.emit(urls);
    }
    ngOnDestroy() {
        const svc = this.cloudinary;
        this.items.forEach(function (i) { svc.revokePreview(i.previewUrl); });
    }
    static ɵfac = function ImagePickerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImagePickerComponent)(i0.ɵɵdirectiveInject(i1.CloudinaryService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImagePickerComponent, selectors: [["app-image-picker"]], inputs: { label: "label", folder: "folder", maxImages: "maxImages", maxSizeMB: "maxSizeMB" }, outputs: { urlsChange: "urlsChange" }, decls: 10, vars: 7, consts: [["fileInput", ""], [1, "image-picker"], [1, "picker-label"], [1, "drop-zone", 3, "click", "dragover", "drop"], [4, "ngIf"], ["class", "preview-grid", 3, "click", 4, "ngIf"], ["type", "file", "accept", "image/*", "multiple", "", 2, "display", "none", 3, "change"], ["class", "status-bar", 4, "ngIf"], ["class", "validation-error", 4, "ngIf"], [1, "drop-icon"], [1, "preview-grid", 3, "click"], ["class", "preview-item", 4, "ngFor", "ngForOf"], ["class", "add-more", 3, "click", 4, "ngIf"], [1, "preview-item"], ["alt", "preview", 3, "src"], ["class", "overlay loading-ov", 4, "ngIf"], ["class", "overlay error-ov", 4, "ngIf"], ["class", "overlay success-ov", 4, "ngIf"], ["type", "button", 1, "remove-btn", 3, "click"], [1, "overlay", "loading-ov"], [1, "spinner"], [1, "overlay", "error-ov"], [1, "overlay", "success-ov"], [1, "add-more", 3, "click"], [1, "status-bar"], [1, "count"], ["class", "uploading-msg", 4, "ngIf"], ["class", "done-msg", 4, "ngIf"], [1, "uploading-msg"], [1, "done-msg"], [1, "validation-error"]], template: function ImagePickerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "label", 2);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵlistener("click", function ImagePickerComponent_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r1); const fileInput_r2 = i0.ɵɵreference(7); return i0.ɵɵresetView(fileInput_r2.click()); })("dragover", function ImagePickerComponent_Template_div_dragover_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.preventDefault()); })("drop", function ImagePickerComponent_Template_div_drop_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDrop($event)); });
            i0.ɵɵtemplate(4, ImagePickerComponent_ng_container_4_Template, 7, 1, "ng-container", 4)(5, ImagePickerComponent_div_5_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 6, 0);
            i0.ɵɵlistener("change", function ImagePickerComponent_Template_input_change_6_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onFilesSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, ImagePickerComponent_div_8_Template, 5, 4, "div", 7)(9, ImagePickerComponent_div_9_Template, 2, 1, "div", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("has-images", ctx.items.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.items.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.items.length > 0);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.items.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.validationError);
        } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf], styles: [".image-picker[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 6px; }\n    .picker-label[_ngcontent-%COMP%] { font-size: 14px; font-weight: 600; color: #374151; }\n    .drop-zone[_ngcontent-%COMP%] {\n      border: 2px dashed #d1d5db; border-radius: 10px; padding: 24px;\n      text-align: center; cursor: pointer; min-height: 100px;\n      display: flex; flex-direction: column; align-items: center; justify-content: center;\n    }\n    .drop-zone[_ngcontent-%COMP%]:hover { border-color: #6366f1; }\n    .drop-zone.has-images[_ngcontent-%COMP%] { padding: 12px; }\n    .drop-icon[_ngcontent-%COMP%] { font-size: 32px; margin-bottom: 8px; }\n    p[_ngcontent-%COMP%] { margin: 4px 0; color: #6b7280; font-size: 14px; }\n    small[_ngcontent-%COMP%] { color: #9ca3af; font-size: 12px; }\n    .preview-grid[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; width: 100%; }\n    .preview-item[_ngcontent-%COMP%] {\n      position: relative; width: 90px; height: 90px;\n      border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb;\n    }\n    .preview-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 100%; height: 100%; object-fit: cover; }\n    .overlay[_ngcontent-%COMP%] {\n      position: absolute; top: 0; left: 0; right: 0; bottom: 0;\n      display: flex; align-items: center; justify-content: center; font-size: 20px;\n    }\n    .loading-ov[_ngcontent-%COMP%] { background: rgba(0,0,0,0.5); }\n    .error-ov[_ngcontent-%COMP%]   { background: rgba(220,38,38,0.5); }\n    .success-ov[_ngcontent-%COMP%] { background: rgba(22,163,74,0.3); color: white; font-weight: bold; }\n    .spinner[_ngcontent-%COMP%] {\n      width: 24px; height: 24px;\n      border: 3px solid rgba(255,255,255,0.3);\n      border-top-color: white; border-radius: 50%;\n      animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n    }\n    @keyframes _ngcontent-%COMP%_spin { to { transform: rotate(360deg); } }\n    .remove-btn[_ngcontent-%COMP%] {\n      position: absolute; top: 2px; right: 2px; width: 20px; height: 20px;\n      border-radius: 50%; border: none; background: rgba(0,0,0,0.6);\n      color: white; font-size: 10px; cursor: pointer;\n      display: flex; align-items: center; justify-content: center;\n    }\n    .remove-btn[_ngcontent-%COMP%]:hover { background: #ef4444; }\n    .add-more[_ngcontent-%COMP%] {\n      width: 90px; height: 90px; border: 2px dashed #d1d5db;\n      border-radius: 8px; display: flex; align-items: center;\n      justify-content: center; font-size: 28px; color: #9ca3af; cursor: pointer;\n    }\n    .add-more[_ngcontent-%COMP%]:hover { border-color: #6366f1; color: #6366f1; }\n    .status-bar[_ngcontent-%COMP%] { display: flex; gap: 12px; font-size: 13px; align-items: center; }\n    .count[_ngcontent-%COMP%] { color: #6b7280; }\n    .uploading-msg[_ngcontent-%COMP%] { color: #f59e0b; }\n    .done-msg[_ngcontent-%COMP%] { color: #16a34a; }\n    .validation-error[_ngcontent-%COMP%] { color: #dc2626; font-size: 13px; }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImagePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-image-picker', standalone: true, imports: [CommonModule], template: `
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
  `, styles: ["\n    .image-picker { display: flex; flex-direction: column; gap: 6px; }\n    .picker-label { font-size: 14px; font-weight: 600; color: #374151; }\n    .drop-zone {\n      border: 2px dashed #d1d5db; border-radius: 10px; padding: 24px;\n      text-align: center; cursor: pointer; min-height: 100px;\n      display: flex; flex-direction: column; align-items: center; justify-content: center;\n    }\n    .drop-zone:hover { border-color: #6366f1; }\n    .drop-zone.has-images { padding: 12px; }\n    .drop-icon { font-size: 32px; margin-bottom: 8px; }\n    p { margin: 4px 0; color: #6b7280; font-size: 14px; }\n    small { color: #9ca3af; font-size: 12px; }\n    .preview-grid { display: flex; flex-wrap: wrap; gap: 8px; width: 100%; }\n    .preview-item {\n      position: relative; width: 90px; height: 90px;\n      border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb;\n    }\n    .preview-item img { width: 100%; height: 100%; object-fit: cover; }\n    .overlay {\n      position: absolute; top: 0; left: 0; right: 0; bottom: 0;\n      display: flex; align-items: center; justify-content: center; font-size: 20px;\n    }\n    .loading-ov { background: rgba(0,0,0,0.5); }\n    .error-ov   { background: rgba(220,38,38,0.5); }\n    .success-ov { background: rgba(22,163,74,0.3); color: white; font-weight: bold; }\n    .spinner {\n      width: 24px; height: 24px;\n      border: 3px solid rgba(255,255,255,0.3);\n      border-top-color: white; border-radius: 50%;\n      animation: spin 0.8s linear infinite;\n    }\n    @keyframes spin { to { transform: rotate(360deg); } }\n    .remove-btn {\n      position: absolute; top: 2px; right: 2px; width: 20px; height: 20px;\n      border-radius: 50%; border: none; background: rgba(0,0,0,0.6);\n      color: white; font-size: 10px; cursor: pointer;\n      display: flex; align-items: center; justify-content: center;\n    }\n    .remove-btn:hover { background: #ef4444; }\n    .add-more {\n      width: 90px; height: 90px; border: 2px dashed #d1d5db;\n      border-radius: 8px; display: flex; align-items: center;\n      justify-content: center; font-size: 28px; color: #9ca3af; cursor: pointer;\n    }\n    .add-more:hover { border-color: #6366f1; color: #6366f1; }\n    .status-bar { display: flex; gap: 12px; font-size: 13px; align-items: center; }\n    .count { color: #6b7280; }\n    .uploading-msg { color: #f59e0b; }\n    .done-msg { color: #16a34a; }\n    .validation-error { color: #dc2626; font-size: 13px; }\n  "] }]
    }], () => [{ type: i1.CloudinaryService }], { label: [{
            type: Input
        }], folder: [{
            type: Input
        }], maxImages: [{
            type: Input
        }], maxSizeMB: [{
            type: Input
        }], urlsChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ImagePickerComponent, { className: "ImagePickerComponent", filePath: "src/app/components/image-picker/image-picker.component.ts", lineNumber: 126 }); })();
