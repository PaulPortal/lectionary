import {daysInMonth} from "./util.ts"
//Moveable dates of the Liturgical Calender
/*
yr - year
ash - Ash Wednesday
eas - Easter
asc - Ascension Sunday
pen - Pentecost 
*/
export const liturgicalCalenderDates = [
    {
    "yr":1999,
    "ash":{"m":2,"dt":17},
    "eas":{"m":4,"dt":4},
    "asc":{"m":5,"dt":16},
    "pen":{"m":5,"dt":23},
    "adv":{"m":11,"dt":28}     
    },
    {
        "yr":2021,
        "ash":{"m":2,"dt":17},
        "eas":{"m":4,"dt":4},
        "asc":{"m":5,"dt":16},
        "pen":{"m":5,"dt":23},
        "adv":{"m":11,"dt":28}     
    }    
    /*{
        "yr":"",
        "ash":{"m":,"dt":},
        "eas":{"m":,"dt":},
        "asc":{"m":,"dt":},
        "pen":{"m":,"dt":},
        "adv":{"m":",dt":},     
    },*/    
];

export function getDatesByYear(yr:number){
    let LDate = {success:false,data:{yr:0,adv:{m:0,dt:0}}}
    let lcd=  liturgicalCalenderDates.find(x=>x.yr==yr)
    if(lcd != undefined){
        LDate.success=true;
        LDate.data=lcd;
    }
   return LDate;
}

export function getWeekofSeaonByDate(){
    return "weekNumber";
}

export function getSundayCycle(yr?:number,month?:number,dt?:number) {
    let cycleName:Array<string> = ["a","b","c"]
    //cycleName[0] = "a";
    let result = {success:false,data:{year:0,month:0,date:0,sundayCycleName:''}};
    let d = new Date();
    let n = d.getFullYear();
    let m = d.getMonth();
    let cdt = d.getDate();
    
    if(yr==undefined){
        yr = n; 
    }
    if(month==undefined || month < 1 || month > 12){
        month = m+1; 
    }
    if(dt==undefined){
        dt = cdt;
    }
    
    let dim = daysInMonth(month,yr);
    if(dt < 1 || dt > dim){
        dt = 1;
    }
    interface infLDate{
        success:boolean,
        data:{
            yr:number,
            adv:{m:number,dt:number}
        }
    }
    let Ldate:infLDate = getDatesByYear(yr);
    if(Ldate.success == true){
        let cycle= yr % 3;;
        let givenDate = new Date(yr,month,dt).getTime();
        let AdventDate = new Date(Ldate.data.yr,Ldate.data.adv.m,Ldate.data.adv.dt).getTime();
        if(givenDate < AdventDate){
            cycle = (yr-1) % 3;
        }
        result.success = true;
        result.data.year = yr;
        result.data.month = month;
        result.data.date = dt;
        result.data.sundayCycleName = cycleName[cycle]
    }

    return result;
}