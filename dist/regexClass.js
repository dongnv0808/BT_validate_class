"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexClass = void 0;
class RegexClass {
    constructor() {
        this.REGEX_CLASS = /^[ACP][0-9]{4,}[G-M]$/;
    }
    validate(regex) {
        return this.REGEX_CLASS.test(regex);
    }
}
exports.RegexClass = RegexClass;
