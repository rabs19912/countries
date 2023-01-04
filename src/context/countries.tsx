import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Country, SearchTypes } from "../types/common";
import { getCountries } from "../api/countries";

type ContextProps = {
  data: Country[] | null;
  isLoading: boolean;
  error: any;
  searchParam: string;
  searchType: SearchTypes;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  setSearchType: React.Dispatch<React.SetStateAction<SearchTypes>>;
};

const CountriesContext = React.createContext<ContextProps>({
  data: null,
  isLoading: false,
  error: false,
  searchParam: "",
  searchType: SearchTypes.text,
  setSearchParam: () => {},
  setSearchType: () => {}
});

function CountriesProvider(props: any) {
  const [searchParam, setSearchParam] = React.useState("");
  const [searchType, setSearchType] = React.useState<SearchTypes>(
    SearchTypes.text
  );

  const { isLoading, data, refetch, isError} = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountries(searchParam as string, searchType),
    refetchOnWindowFocus: false,
    enabled: !!searchParam,
    retry: 0
  });


  React.useEffect(() => {
    if (searchType === SearchTypes.text) {
      const delayDebounceFn = setTimeout(async () => {
        await refetch();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    }
    refetch()
  }, [searchParam, searchType, refetch]);

  const value = React.useMemo(() => {
    return {
      data: data?.data,
      isLoading,
      error: isError,
      setSearchParam,
      setSearchType,
      searchParam,
      searchType
    };
  }, [data, isLoading, setSearchParam, searchParam, searchType, isError]);

  return <CountriesContext.Provider {...props} value={value} />;
}

function useCountries(): ContextProps {
  const context = React.useContext(CountriesContext);
  if (context === undefined) {
    throw new Error("IpDetails must be used within an CountriesProvider");
  }
  return context;
}

export { CountriesProvider, useCountries, CountriesContext };
