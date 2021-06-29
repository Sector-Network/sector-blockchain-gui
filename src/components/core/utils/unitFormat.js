"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Unit_1 = require("../constants/Unit");
var CurrencyCode_1 = require("../constants/CurrencyCode");
var defaultOptions = {
    to: Unit_1.default.SECTOR,
    from: Unit_1.default.SECTOR,
};
function unitFormat(value, options) {
    var _a = __assign(__assign({}, defaultOptions), options), to = _a.to, currencyCode = _a.currencyCode;
    var updatedValue = value;
    if (currencyCode) {
        // @ts-ignore
        var code = CurrencyCode_1.default[to];
        if (!code) {
            throw new Error("Currency code is not defined for " + to);
        }
        return updatedValue + " " + code;
    }
    return String(updatedValue);
}
exports.default = unitFormat;
//# sourceMappingURL=unitFormat.js.map