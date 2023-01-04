import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Page from "../../components/Page";
import SearchInput from "../../components/SearchInput";
import { useCountries } from "../../context/countries";
import { ErrorMessage } from "../../styled/common";
import {
  Card,
  CountriesContainer,
  CountryInfo,
  FlagContainer,
  Heading,
  Wrapper,
  Text,
  InputsContainer,
} from "./styled";

// export function sanitizedURL(
//   string: string,
//   changeParam: string,
//   toChange: string
// ) {
//   return string.replaceAll(changeParam, toChange).toLocaleLowerCase();
// }

function CountriesList() {

  const { data, isLoading, error } = useCountries();
  const navigate = useNavigate();
 
  function goToDetail(country: string) {
    navigate(`detail/${country.toLocaleLowerCase()}`);
  }

  return (
    <Page isLoading={isLoading}>
      <Wrapper>
        <InputsContainer>
          <SearchInput />
          <Dropdown />
        </InputsContainer>
        {data && !error && (
          <CountriesContainer>
            {data?.map((country, index) => {
              return (
                <Card onClick={() => goToDetail(country?.cca2)} key={index}>
                  <FlagContainer image={country.flags.svg} />
                  <CountryInfo>
                    <Heading>{country.name.common}</Heading>
                    <Text>
                      <span>Population: </span>
                      {country.population}
                    </Text>
                    <Text>
                      <span>Region: </span>
                      {country.region}
                    </Text>
                    <Text>
                      <span>Capital: </span>
                      {country.capital}
                    </Text>
                  </CountryInfo>
                </Card>
              );
            })}
          </CountriesContainer>
        )}
        {error && <ErrorMessage>Error, invalid country.</ErrorMessage>}
      </Wrapper>
    </Page>
  );
}

export { CountriesList };
