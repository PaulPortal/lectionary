"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysInMonth = void 0;
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
exports.daysInMonth = daysInMonth;
// July
daysInMonth(7, 2009); // 31
// February
daysInMonth(2, 2009); // 28
daysInMonth(2, 2008); // 29
