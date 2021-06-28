export function daysInMonth (month:number, year:number) {
    return new Date(year, month, 0).getDate();
}

// July
daysInMonth(7,2009); // 31
// February
daysInMonth(2,2009); // 28
daysInMonth(2,2008); // 29