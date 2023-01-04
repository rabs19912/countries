export type NativeName = {
    official: string;
    common: string;
  };
  
  export type CountryName = {
    common: string;
    nativeName: { [key: string]: NativeName };
  };
  
  export type Currency = {
    name: string;
  };
  
  export type Country =  {
    name: CountryName;
    population: number;
    flags: { [key: string]: string };
    region: string;
    capital: string;
    cca2: string;
    languages: { [key: string]: string };
    tld: string[];
    currencies: { [key: string]: Currency };
    borders: string[];
    subregion:string;
  };

export type BorderCountry = {
    altSpellings: string[];
    capital:string[];
    cca2:string;
    name: CountryName
}

export enum Themes {
	light = 'light',
	dark = 'dark'
}

export enum SearchTypes {
  region = "region",
  text = "text",
  detail = "detail",
  codes = "codes",
}

export type useCountryParams = {
  countryCode?: string;
};

export type LabelValue = {
  label: string;
  value: string;
};

export type CountryDetail = {
  info: LabelValue[];
  flag: string;
  name: string;
};

export type useCountryResponse = {
  details?: CountryDetail;
  borders: BorderCountry[];
  refetchCountry: any;
  isLoading: boolean;
  isError: boolean;
};
