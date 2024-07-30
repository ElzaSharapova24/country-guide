import {Country} from "./types.ts";

const BaseUrl = 'https://restcountries.com';

export const getCountries = async (): Promise<Country[]> => {
    try {
        const response = await fetch(`${BaseUrl}/v3.1/all`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Country[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw new Error('Could not fetch countries');
    }
};

export const fetchCountryByCode = async (cca3: string): Promise<Country> => {
    try {
        const response = await fetch(`${BaseUrl}/v3.1/alpha/${cca3}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched country:', data[0]);
        return data[0];
    } catch (error) {
        console.error('Error fetching country:', error);
        throw error;
    }
};
