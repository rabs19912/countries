import axios from "axios";
import { BASE_URL } from "../common/constants";
import { getSearchParams } from "../common/utils";
import { SearchTypes } from "../types/common";

async function getCountries(param: string, searchType: SearchTypes) {
  const params = getSearchParams(param, searchType);
  return await axios.get(`${BASE_URL}/${params}`);
}

async function getCountry(param: string) {
  const params = getSearchParams(param, SearchTypes.detail);
  return await axios.get(`${BASE_URL}/${params}`);
}

async function getCountryBorders(param: string[]) {
  console.log("param", param);
  if (!param.length) {
    return new Promise((resolve) => {
      resolve([]);
    });
  }
  const params = getSearchParams(param, SearchTypes.codes);
  return await axios.get(`${BASE_URL}/${params}`);
}

export {
  getCountries,
  getCountry,
  getCountryBorders,
};
