import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
function Inputcomponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "label", 1);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
function Inputcomponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 5);
    i0.ɵɵdomListener("click", function Inputcomponent_Conditional_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle.emit()); });
    i0.ɵɵdomElement(1, "i", 6);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵdomProperty("disabled", ctx_r0.disabled);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fa-eye", !ctx_r0.visible)("fa-eye-slash", ctx_r0.visible);
} }
export class Inputcomponent {
    label;
    placeholder = '';
    type = 'text';
    hasToggle = false; // show eye toggle inside input
    visible = false; // visibility state for password
    toggle = new EventEmitter();
    value = '';
    disabled = false;
    // 🔥 DEBEN SER PÚBLICAS
    onChange = () => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value ?? '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = function Inputcomponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Inputcomponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Inputcomponent, selectors: [["app-input"]], inputs: { label: "label", placeholder: "placeholder", type: "type", hasToggle: "hasToggle", visible: "visible" }, outputs: { toggle: "toggle" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => Inputcomponent),
                    multi: true,
                },
            ])], decls: 5, vars: 8, consts: [[1, "input-container", "flex", "flex-col", "w-full"], [1, "mb-1", "text-white", "text-sm"], [1, "relative"], ["title", "input", 1, "rounded-full", "p-3", "text-black", "focus:outline-none", "focus:ring-2", "focus:ring-red-600", "w-full", "bg-white", 3, "input", "blur", "type", "placeholder", "value", "disabled"], ["type", "button", "aria-label", "Toggle password visibility", 1, "absolute", "right-3", "inset-y-0", "flex", "items-center", "text-black", "hover:opacity-80", "text-lg", 3, "disabled"], ["type", "button", "aria-label", "Toggle password visibility", 1, "absolute", "right-3", "inset-y-0", "flex", "items-center", "text-black", "hover:opacity-80", "text-lg", 3, "click", "disabled"], [1, "fas"]], template: function Inputcomponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, Inputcomponent_Conditional_1_Template, 2, 1, "label", 1);
            i0.ɵɵdomElementStart(2, "div", 2)(3, "input", 3);
            i0.ɵɵdomListener("input", function Inputcomponent_Template_input_input_3_listener($event) { return ctx.onChange($event.target.value); })("blur", function Inputcomponent_Template_input_blur_3_listener() { return ctx.onTouched(); });
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(4, Inputcomponent_Conditional_4_Template, 2, 5, "button", 4);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.label ? 1 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("pr-12", ctx.type === "password" || ctx.hasToggle);
            i0.ɵɵdomProperty("type", ctx.type === "password" && ctx.visible ? "text" : ctx.type)("placeholder", ctx.placeholder)("value", ctx.value)("disabled", ctx.disabled);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.type === "password" && ctx.hasToggle ? 4 : -1);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Inputcomponent, [{
        type: Component,
        args: [{ selector: 'app-input', standalone: true, imports: [CommonModule], providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => Inputcomponent),
                        multi: true,
                    },
                ], template: "<div class=\"input-container flex flex-col w-full\">\n  @if (label) {\n    <label class=\"mb-1 text-white text-sm\">{{ label }}</label>\n  }\n\n  <div class=\"relative\">\n    <input\n      [type]=\"type === 'password' && visible ? 'text' : type\"\n      [placeholder]=\"placeholder\"\n      [value]=\"value\"\n      [disabled]=\"disabled\"\n      (input)=\"onChange($event.target.value)\"\n      (blur)=\"onTouched()\"\n      title=\"input\"\n      [class.pr-12]=\"type === 'password' || hasToggle\"\n      class=\"rounded-full p-3 text-black focus:outline-none focus:ring-2 focus:ring-red-600 w-full bg-white\"\n    />\n\n    <!-- Toggle eye inside input when requested -->\n    @if (type === 'password' && hasToggle) {\n      <button\n        type=\"button\"\n        (click)=\"toggle.emit()\"\n        class=\"absolute right-3 inset-y-0 flex items-center text-black hover:opacity-80 text-lg\"\n        [disabled]=\"disabled\"\n        aria-label=\"Toggle password visibility\"\n      >\n        <i class=\"fas\" [class.fa-eye]=\"!visible\" [class.fa-eye-slash]=\"visible\"></i>\n      </button>\n    }\n  </div>\n</div>\n" }]
    }], null, { label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], type: [{
            type: Input
        }], hasToggle: [{
            type: Input
        }], visible: [{
            type: Input
        }], toggle: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Inputcomponent, { className: "Inputcomponent", filePath: "src/app/components/input/input.ts", lineNumber: 18 }); })();
