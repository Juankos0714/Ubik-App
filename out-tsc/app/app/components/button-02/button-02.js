import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
function Button02_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 1);
    i0.ɵɵdomElement(1, "i");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.iconLeft + " text-lg");
} }
function Button02_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElement(0, "i");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.iconRight + " text-lg opacity-70");
} }
export class Button02 {
    router;
    clicked = new EventEmitter();
    text;
    routerLink;
    queryParams;
    iconLeft;
    iconRight;
    // si es true el botón ocupará el 100%
    fullWidth = false;
    constructor(router) {
        this.router = router;
    }
    navigate() {
        if (this.routerLink) {
            const link = Array.isArray(this.routerLink) ? this.routerLink : [this.routerLink];
            const extras = this.queryParams ? { queryParams: this.queryParams } : undefined;
            if (extras)
                this.router.navigate(link, extras);
            else
                this.router.navigate(link);
            return;
        }
        this.clicked.emit();
    }
    static ɵfac = function Button02_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Button02)(i0.ɵɵdirectiveInject(i1.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Button02, selectors: [["app-button-02"]], inputs: { text: "text", routerLink: "routerLink", queryParams: "queryParams", iconLeft: "iconLeft", iconRight: "iconRight", fullWidth: "fullWidth" }, outputs: { clicked: "clicked" }, decls: 5, vars: 5, consts: [[1, "button", "border", "border-[#8B0000]", "text-[#cc3a3a]", "bg-transparent", "font-medium", "rounded-lg", "w-full", "text-center", "p-2.5", "cursor-pointer", "flex", "items-center", "justify-between", "gap-2", "text-overflow:", "ellipsis;", "text-clip", 3, "click"], [1, "flex", "items-center", "gap-3", "flex-1"], [1, "mx-auto"], [3, "class"]], template: function Button02_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "button", 0);
            i0.ɵɵdomListener("click", function Button02_Template_button_click_0_listener() { return ctx.navigate(); });
            i0.ɵɵconditionalCreate(1, Button02_Conditional_1_Template, 2, 2, "div", 1);
            i0.ɵɵdomElementStart(2, "span", 2);
            i0.ɵɵtext(3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(4, Button02_Conditional_4_Template, 1, 2, "i", 3);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("w-full", ctx.fullWidth);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.iconLeft ? 1 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.text);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.iconRight ? 4 : -1);
        } }, dependencies: [CommonModule], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Button02, [{
        type: Component,
        args: [{ selector: 'app-button-02', standalone: true, imports: [CommonModule], template: "<button\n  (click)=\"navigate()\"\n  class=\"button border border-[#8B0000] text-[#cc3a3a] bg-transparent font-medium rounded-lg w-full text-center p-2.5 cursor-pointer flex items-center justify-between gap-2 text-overflow: ellipsis; text-clip\"\n  [class.w-full]=\"fullWidth\"\n>\n  @if (iconLeft) {\n    <div class=\"flex items-center gap-3 flex-1\">\n      <i [class]=\"iconLeft + ' text-lg'\"></i>\n    </div>\n  }\n\n  <span class=\"mx-auto\">{{ text }}</span>\n\n  @if (iconRight) {\n    <i [class]=\"iconRight + ' text-lg opacity-70'\"></i>\n  }\n</button>\n" }]
    }], () => [{ type: i1.Router }], { clicked: [{
            type: Output
        }], text: [{
            type: Input
        }], routerLink: [{
            type: Input
        }], queryParams: [{
            type: Input
        }], iconLeft: [{
            type: Input
        }], iconRight: [{
            type: Input
        }], fullWidth: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Button02, { className: "Button02", filePath: "src/app/components/button-02/button-02.ts", lineNumber: 12 }); })();
