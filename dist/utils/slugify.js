"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(string) {
    string = String(string);
    return string
        // Make lower-case
        .toLowerCase()
        // Remove misc punctuation
        .replace(/['"’‘”“`]/g, '')
        // Replace non-word characters with dashes
        .replace(/[\W|_]+/g, '-')
        // Remove starting and trailing dashes
        .replace(/^-+|-+$/g, '');
}
