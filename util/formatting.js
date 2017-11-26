"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
exports.commas = commas;
//# sourceMappingURL=formatting.js.map