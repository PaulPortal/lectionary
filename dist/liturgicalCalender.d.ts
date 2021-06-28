export declare const liturgicalCalenderDates: {
    yr: number;
    ash: {
        m: number;
        dt: number;
    };
    eas: {
        m: number;
        dt: number;
    };
    asc: {
        m: number;
        dt: number;
    };
    pen: {
        m: number;
        dt: number;
    };
    adv: {
        m: number;
        dt: number;
    };
}[];
export declare function getDatesByYear(yr: number): {
    success: boolean;
    data: {
        yr: number;
        adv: {
            m: number;
            dt: number;
        };
    };
};
export declare function getWeekofSeaonByDate(): string;
export declare function getSundayCycle(yr?: number, month?: number, dt?: number): {
    success: boolean;
    data: {
        year: number;
        month: number;
        date: number;
        sundayCycleName: string;
    };
};
