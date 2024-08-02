import axios from "axios";

export interface Country {
  cca3: string;
  flags: { png: string };
  translations: { fra: { common: string } };
  region: string;
  name: { common: string; official: string };
  capital: string[];
  timezones: string[];
  languages: { [key: string]: string };
  population: number;
}

export const fetchCountries = async (): Promise<Country[]> => {
  const res = await axios.get("https://restcountries.com/v3.1/all");
  return res.data;
};

export const fetchCountry = async (countryCode: string): Promise<Country> => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  );
  return res.data[0];
};
