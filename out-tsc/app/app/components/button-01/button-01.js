import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentModal } from '../payment-modal/payment-modal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/cdk/dialog";
import * as i3 from "@angular/common";
function Button01_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.iconLeft + " text-lg");
} }
function Button01_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.subtext, " ");
} }
function Button01_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.iconRight + " text-lg opacity-70");
} }
export class Button01 {
    router;
    dialog;
    text;
    subtext;
    iconLeft;
    iconRight;
    routerLink;
    disabled = false;
    fullWidth = false;
    tall = false;
    type = 'button';
    /* 👇 RESTAURAMOS ESTO */
    id;
    action;
    clicked = new EventEmitter();
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    handleClick() {
        if (this.disabled)
            return;
        if (this.action === 'reservar') {
            if (!this.id)
                return;
            const dialogRef = this.dialog.open(PaymentModal, {
                data: { id: this.id }
            });
            dialogRef.closed.subscribe((result) => {
                if (result?.success) {
                    this.router.navigate(['/payment/success'], { state: { paymentDetails: result.details } });
                }
            });
            return;
        }
        if (this.routerLink) {
            if (Array.isArray(this.routerLink)) {
                this.router.navigate(this.routerLink);
            }
            else {
                this.router.navigate([this.routerLink]);
            }
            return;
        }
        this.clicked.emit();
    }
    static ɵfac = function Button01_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Button01)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.Dialog)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Button01, selectors: [["app-button-01"]], inputs: { text: "text", subtext: "subtext", iconLeft: "iconLeft", iconRight: "iconRight", routerLink: "routerLink", disabled: "disabled", fullWidth: "fullWidth", tall: "tall", type: "type", id: "id", action: "action" }, outputs: { clicked: "clicked" }, decls: 7, vars: 9, consts: [[1, "bg-linear-to-r", "from-[#6E2A35]", "to-[#A72027]", "text-white", "font-medium", "rounded-lg", "hover:from-[#7E3A45]", "hover:to-[#B73037]", "transition-colors", "cursor-pointer", "flex", "items-center", "justify-between", "gap-2", 3, "click", "disabled", "type", "ngClass"], [1, "flex", "items-center", "justify-center", "gap-3", "w-12", "shrink-0"], [1, "flex-1", "text-center", "flex", "flex-col", "justify-center"], [1, "font-semibold"], [1, "block", "text-sm", "text-white/90", "mt-1"], [3, "class"]], template: function Button01_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function Button01_Template_button_click_0_listener() { return ctx.handleClick(); });
            i0.ɵɵconditionalCreate(1, Button01_Conditional_1_Template, 2, 2, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, Button01_Conditional_5_Template, 2, 1, "span", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, Button01_Conditional_6_Template, 1, 2, "i", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("w-full", ctx.fullWidth);
            i0.ɵɵproperty("disabled", ctx.disabled)("type", ctx.type)("ngClass", ctx.tall ? "p-6 min-h-[72px] text-lg" : "p-2.5");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.iconLeft ? 1 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.text);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.subtext ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.iconRight ? 6 : -1);
        } }, dependencies: [CommonModule, i3.NgClass], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Button01, [{
        type: Component,
        args: [{ selector: 'app-button-01', standalone: true, imports: [CommonModule], template: "<button\n  (click)=\"handleClick()\"\n  [disabled]=\"disabled\"\n  [type]=\"type\"\n  class=\"bg-linear-to-r from-[#6E2A35] to-[#A72027] text-white font-medium rounded-lg hover:from-[#7E3A45] hover:to-[#B73037] transition-colors cursor-pointer flex items-center justify-between gap-2\"\n  [ngClass]=\"tall ? 'p-6 min-h-[72px] text-lg' : 'p-2.5'\"\n  [class.w-full]=\"fullWidth\"\n>\n  @if (iconLeft) {\n    <div class=\"flex items-center justify-center gap-3 w-12 shrink-0\">\n      <i [class]=\"iconLeft + ' text-lg'\"></i>\n    </div>\n  }\n\n  <div class=\"flex-1 text-center flex flex-col justify-center\">\n    <span class=\"font-semibold\">{{ text }}</span>\n\n    @if (subtext) {\n      <span class=\"block text-sm text-white/90 mt-1\">\n        {{ subtext }}\n      </span>\n    }\n  </div>\n\n  @if (iconRight) {\n    <i [class]=\"iconRight + ' text-lg opacity-70'\"></i>\n  }\n</button>" }]
    }], () => [{ type: i1.Router }, { type: i2.Dialog }], { text: [{
            type: Input
        }], subtext: [{
            type: Input
        }], iconLeft: [{
            type: Input
        }], iconRight: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], disabled: [{
            type: Input
        }], fullWidth: [{
            type: Input
        }], tall: [{
            type: Input
        }], type: [{
            type: Input
        }], id: [{
            type: Input
        }], action: [{
            type: Input
        }], clicked: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Button01, { className: "Button01", filePath: "src/app/components/button-01/button-01.ts", lineNumber: 13 }); })();
