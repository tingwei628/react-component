(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Base_TS;
    (function (Base_TS) {
        class S {
            constructor(t) {
                this.t = t;
                this.p = t;
            }
            print() {
                return this.p;
            }
        }
        Base_TS.S = S;
        console.log("Hello", new S("KOKO").print());
    })(Base_TS = exports.Base_TS || (exports.Base_TS = {}));
});
//# sourceMappingURL=index.js.map