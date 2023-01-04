import styled from "styled-components";
import { device } from "../../styled/device";

type CountryFlagProps = {
  image: string;
};

export const BackButton = styled.div`
  margin: 0 25px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 2px;
  cursor: pointer;
  padding: 6px 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  width: 100px;
  margin: 28px 25px 70px 25px;

  & svg {
    margin-right: 15px;
  }

  @media (min-width: ${device.laptop}) {
    margin: 40px 75px 75px 75px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 25px;

  @media (min-width: ${device.laptop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 75px;
    gap: 95px;
  }
`;

export const CountryFlag = styled.div<CountryFlagProps>`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 240px;
  margin-bottom: 40px;

  @media (min-width: ${device.laptop}) {
    margin-bottom: 0;
    margin-right: 25px;
    height: 390px;
  }
`;

export const CountryInfo = styled.div`

  @media (min-width: ${device.laptop}) {
    padding-top: 40px;
    margin-right: 25px;
    height: 390px;
  }
`;

export const Heading = styled.div`
  font-family: ${({ theme }) => theme.fonts.extraBold};
  font-size: 1.2em;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: ${device.laptop}) {
    font-size: 2em;
    margin-bottom: 40px;
  }
`;

export const CountryData = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
  margin-bottom: 40px;

  .div0 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div2 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div3 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .div4 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .div5 {
    grid-area: 7 / 1 / 8 / 2;
  }
  .div6 {
    grid-area: 8 / 1 / 9 / 2;
  }
  .div7 {
    grid-area: 9 / 1 / 10 / 2;
  }

  @media (min-width: ${device.laptop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 95px;
    grid-row-gap: 8px;
    margin-bottom: 70px;

    .div0 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .div1 {
      grid-area: 2 / 1 / 3 / 2;
    }
    .div2 {
      grid-area: 3 / 1 / 4 / 2;
    }
    .div3 {
      grid-area: 4 / 1 / 5 / 2;
    }
    .div4 {
      grid-area: 5 / 1 / 6 / 2;
    }
    .div5 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .div6 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .div7 {
      grid-area: 3 / 2 / 4 / 3;
    }
  }
`;

export const Text = styled.div`
  font-size: 12px;
  padding-top: 0;
  color: ${({ theme }) => theme.colors.text};

  & span {
    font-weight: bold;
  }

  @media (min-width: ${device.laptop}) {
    padding-top: 5px;
    font-size: 15px;
  }
`;

export const BorderCountriesContainer = styled.div`
  display: initial;
  color: ${({ theme }) => theme.colors.text};
  & span {
    font-size: 1.2em;
  }

  @media (min-width: ${device.laptop}) {
    display: grid;
    grid-template-columns: 20% 80%;

    & span {
      font-size: 1em;
    }
  }
`;

export const BorderCountriesWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 15px;

  @media (min-width: ${device.laptop}) {
    display: flex;
    grid-template-columns: 0;
    grid-row-gap: 10px;
    margin-top: 0;
    flex-wrap: wrap;
  }
`;

export const BorderCountry = styled.div`
  box-shadow:${({ theme }) => theme.colors.boxShadow};
  -webkit-box-shadow:${({ theme }) => theme.colors.boxShadow};
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
  text-align: center;

  @media (min-width: ${device.laptop}) {
    font-size: 14px;
    display: grid;
    flex-wrap: nowrap;
    place-content: center;
  }
`;
