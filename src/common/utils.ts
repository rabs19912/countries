import { Currency, SearchTypes } from "../types/common";
import { filters, detailsFilters } from "./constants";

function getBorderFilters(codes: string[]) {
  return `codes=${codes.join()}&fields=name,cca2`;
}

function getSearchParams(param: string | string[], searchType: SearchTypes) {
  switch (searchType) {
    case SearchTypes.region:
      return `region/${param}?${filters}`;
    case SearchTypes.detail:
      return `alpha/${param}?${detailsFilters}`;
    case SearchTypes.codes:
      return `alpha?${getBorderFilters(param as string[])}`;
    case SearchTypes.text:
    default:
      const search =
        param === "" || undefined
          ? `all?${filters}`
          : `name/${param}?${filters}`;
      return search;
  }
}

function languagesToString(languages: { [key: string]: string }) {
  return Object.values(languages).join().replaceAll(",", ", ");
}

function capitalToString(capitals: string[]) {
  return capitals.join().replaceAll(",", ", ");
}

function currenciesToString(currencies: { [key: string]: Currency }) {
  const currenciesArray = Object.values(currencies);

  const currenciesString = currenciesArray
    .map((c) => c.name)
    .join()
    .replaceAll(",", ", ");
  return currenciesString;
}


export {
  getBorderFilters,
  getSearchParams,
  languagesToString,
  capitalToString,
	currenciesToString
};
