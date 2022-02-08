let seasons = [
    {"name":"Advent", "seasonName":"Advent Seaon","code":"ad"},
    {"name":"Christmastide", "seasonName":"Christmas Season","code":"ch"},
    {"name":"Yearly Cycle I","seasonName":"Ordinary Time I","code":"c1"},
    {"name":"Lent","seasonName":"Lent Season","code":"le"},
    {"name":"Eastertide","seasonName":"Easter Season","code":"ea"},
    {"name":"Yearly Cycle II","seasonName":"Ordinary Time II","code":"c2"}
]
export function getSeasons(){
    return seasons;
}

export function getSeasonByCode(seasonCode: String){
    return seasons.filter(s => s.code == seasonCode)[0];
}