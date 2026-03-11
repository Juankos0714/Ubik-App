import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Tag {
    static ɵfac = function Tag_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Tag)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Tag, selectors: [["app-tag"]], decls: 2, vars: 0, template: function Tag_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "tag works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Tag, [{
        type: Component,
        args: [{ selector: 'app-tag', imports: [], template: "<p>tag works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Tag, { className: "Tag", filePath: "src/app/components/tag/tag.ts", lineNumber: 9 }); })();
