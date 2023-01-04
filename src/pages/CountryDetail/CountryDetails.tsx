import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../components/Page";

import { useCountry } from "../../hooks/useCountry";
import { PATHS } from "../../Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  CountryFlag,
  CountryInfo,
  Heading,
  CountryData,
  Text,
  BorderCountriesContainer,
  BorderCountriesWrapper,
  BorderCountry,
  BackButton,
} from "./styled";
import { BorderCountry as BorderCountryType } from "../../types/common";
import { ErrorMessage } from "../../styled/common";

function CountryDetails() {
  const { countryCode } = useParams();
  const { details, borders, refetchCountry, isLoading, isError } = useCountry({
    countryCode,
  });
  const navigate = useNavigate();

  function goToDetail(countryCode: string) {
    navigate(`/detail/${countryCode.toLocaleLowerCase()}`);
  }

  React.useEffect(() => {
    if (countryCode) {
      refetchCountry();
    }
  }, [refetchCountry, countryCode]);

  function goToHome() {
    navigate(PATHS.home);
  }

  return (
    <Page isLoading={isLoading}>
      <BackButton onClick={() => goToHome()}>
        <FontAwesomeIcon icon={faArrowLeftLong} />
        Back
      </BackButton>
      {details && !isError && (
        <Wrapper>
          <CountryFlag image={details?.flag as string}></CountryFlag>
          <CountryInfo>
            <Heading>{details?.name}</Heading>
            <CountryData>
              {details?.info?.map((detail, index) => {
                return (
                  <Text key={index} className={`div${index}`}>
                    <span>{detail.label}: </span>
                    {detail.value}
                  </Text>
                );
              })}
            </CountryData>

            {borders && (
              <BorderCountriesContainer>
                <Text>
                  <span>Border Countries: </span>
                </Text>
                <BorderCountriesWrapper>
                  {borders?.map((country: BorderCountryType, index: number) => {
                    return (
                      <BorderCountry
                        key={index}
                        onClick={() => goToDetail(country?.cca2)}
                      >
                        {country.name.common}
                      </BorderCountry>
                    );
                  })}
                </BorderCountriesWrapper>
              </BorderCountriesContainer>
            )}
          </CountryInfo>
        </Wrapper>
      )}
      {isError && (
        <ErrorMessage>
          Invalid country, come back to the country list pages, and select a
          valid country
        </ErrorMessage>
      )}
    </Page>
  );
}

export { CountryDetails };
