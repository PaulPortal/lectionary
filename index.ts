// Lectionary is a book or listing that contains a collection of scripture readings for a given day or occasion.

import * as lec from "./index-deno.ts"

//console.log(lec.getSeasons());

//console.log(lec.getSeasonByCode("ea"));
let x = new lec.Lectionary();
//console.log(x.getWeekOfYear());

//console.log(lec.liturgicalCalenderDates.find(x=>x.yr=="2021"));
//console.log(lec.getDatesByYear(2021));
console.log(lec.getSundayCycle(2021,11,28));
console.log(lec.getSundayCycle());