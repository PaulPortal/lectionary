"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSundayCycle = exports.getWeekofSeaonByDate = exports.getDatesByYear = exports.liturgicalCalenderDates = void 0;
const util_1 = require("./util");
//Moveable dates of the Liturgical Calender
/*
yr - year
ash - Ash Wednesday
eas - Easter
asc - Ascension Sunday
pen - Pentecost
*/
exports.liturgicalCalenderDates = [
    {
        "yr": 1999,
        "ash": { "m": 2, "dt": 17 },
        "eas": { "m": 4, "dt": 4 },
        "asc": { "m": 5, "dt": 16 },
        "pen": { "m": 5, "dt": 23 },
        "adv": { "m": 11, "dt": 28 }
    },
    {
        "yr": 2021,
        "ash": { "m": 2, "dt": 17 },
        "eas": { "m": 4, "dt": 4 },
        "asc": { "m": 5, "dt": 16 },
        "pen": { "m": 5, "dt": 23 },
        "adv": { "m": 11, "dt": 28 }
    },
    {
        "yr": 2022,
        "ash": { "m": 3, "dt": 2 },
        "eas": { "m": 4, "dt": 17 },
        "asc": { "m": 5, "dt": 26 },
        "pen": { "m": 6, "dt": 5 },
        "adv": { "m": 11, "dt": 27 },
    }
    //2022	C	II	8	March 2	April 17	June 5	10	Nov 27	Sunday
    /*{
        "yr":,
        "ash":{"m":,"dt":},
        "eas":{"m":,"dt":},
        "asc":{"m":,"dt":},
        "pen":{"m":,"dt":},
        "adv":{"m":,"dt":},
    },*/
];
function getDatesByYear(yr) {
    let LDate = { success: false, data: { yr: 0, adv: { m: 0, dt: 0 } } };
    let lcd = exports.liturgicalCalenderDates.find(x => x.yr == yr);
    if (lcd != undefined) {
        LDate.success = true;
        LDate.data = lcd;
    }
    return LDate;
}
exports.getDatesByYear = getDatesByYear;
function getWeekofSeaonByDate() {
    return "weekNumber";
}
exports.getWeekofSeaonByDate = getWeekofSeaonByDate;
function getSundayCycle(yr, month, dt) {
    let cycleName = ["a", "b", "c"];
    //cycleName[0] = "a";
    let result = { success: false, data: { year: 0, month: 0, date: 0, sundayCycleName: '' } };
    let d = new Date();
    let n = d.getFullYear();
    let m = d.getMonth();
    let cdt = d.getDate();
    if (yr == undefined) {
        yr = n;
    }
    if (month == undefined || month < 1 || month > 12) {
        month = m + 1;
    }
    if (dt == undefined) {
        dt = cdt;
    }
    let dim = (0, util_1.daysInMonth)(month, yr);
    if (dt < 1 || dt > dim) {
        dt = 1;
    }
    let Ldate = getDatesByYear(yr);
    if (Ldate.success == true) {
        let cycle = yr % 3;
        ;
        let givenDate = new Date(yr, month, dt).getTime();
        let AdventDate = new Date(Ldate.data.yr, Ldate.data.adv.m, Ldate.data.adv.dt).getTime();
        if (givenDate < AdventDate) {
            cycle = (yr - 1) % 3;
        }
        result.success = true;
        result.data.year = yr;
        result.data.month = month;
        result.data.date = dt;
        result.data.sundayCycleName = cycleName[cycle];
    }
    return result;
}
exports.getSundayCycle = getSundayCycle;
