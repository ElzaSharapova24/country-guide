export interface Country {
    name: {
        common: string;
        official: string;
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    region: string;
    population: number;
    flags:{
        png: string,
        svg: string,
    };
    capital: string;
    startOfWeek: string;
}