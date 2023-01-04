import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useCountryParams, useCountryResponse } from "../types/common";
import { capitalToString, currenciesToString, languagesToString } from "../common/utils";
import { getCountry, getCountryBorders } from "../api/countries";

function useCountry({ countryCode }: useCountryParams): useCountryResponse {
  const [borders, setBorders] = React.useState<string| undefined>(undefined);

  const {
    isLoading,
    data,
    isError,
    refetch: refetchCountry,
  } = useQuery({
    queryKey: ["country"],
    queryFn: () => getCountry(countryCode!),
    refetchOnMount: false,
    enabled: Boolean(countryCode),
    retry: 0,
  });

  const { data: dataCountryBorders, refetch: refetchCountries } = useQuery<any>(
    {
      queryKey: ["countryBorders"],
      queryFn: () =>  getCountryBorders(data?.data?.borders),
      enabled: Boolean(borders),
      retry: 0,
    }
  );

  React.useEffect(() => {
    setBorders(data?.data?.borders);
  }, [data?.data]);

  const mounted = React.useRef(false);

  React.useEffect(() => {
    mounted.current = true;
    setBorders(undefined);
    return () => {
      mounted.current = false;
      setBorders(undefined);
    };
  }, []);

  const details = React.useMemo(() => {
    const currentCountry = data?.data;

    if (currentCountry) {
      const [mainLanguage] = Object.keys(currentCountry.languages);
      const nativeName = currentCountry.name.nativeName[mainLanguage].common;
      const [tld] = currentCountry.tld;

      return {
        info: [
          { label: "Native Name", value: nativeName },
          { label: "Population", value: currentCountry.population },
          { label: "Region", value: currentCountry.region },
          { label: "Sub Region", value: currentCountry.subregion },
          { label: "Capital", value: capitalToString(currentCountry.capital) },
          { label: "Top Level Domain", value: tld },
          {
            label: "Currencies",
            value: currenciesToString(currentCountry.currencies),
          },
          {
            label: "Languages",
            value: languagesToString(currentCountry.languages),
          },
        ],
        flag: currentCountry.flags.svg,
        name: currentCountry.name.common,
      };
    }
  }, [data]);

  React.useEffect(() => {
    if (borders) {
      // refetchCountries();
    }
  }, [refetchCountries, borders]);

  return {
    details,
    borders: dataCountryBorders?.data,
    refetchCountry,
    isLoading,
    isError,
  };
}

export { useCountry };
