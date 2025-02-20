export interface Country {
  name: string;
  official_name: string;
  callingCode: string;
  capital: string;
  region: string;
  population: number;
  latLng: { country: [number, number] };
  area: number;
  currencies: { [key: string]: string };
  languages: { [key: string]: string };
  flag: { large: string; medium: string };
}

export interface CountryDetails
  extends Pick<
    Country,
    | "callingCode"
    | "capital"
    | "region"
    | "population"
    | "latLng"
    | "area"
    | "currencies"
    | "languages"
  > {}

export interface CountryHeader extends Pick<Country, "name" | "official_name"> {
  flagURL: string;
}
