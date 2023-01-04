import styled from "styled-components";
import { device } from "../../styled/device";

type FlagContainerProps = {
  image: string;
};

export const Wrapper = styled.div`
  padding: 0 20px;

  @media (min-width: ${device.laptop}) {
    padding: 0 75px;
  }
`;

export const InputsContainer = styled.div`
  @media (min-width: ${device.laptop}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const CountriesContainer = styled.div`
  @media (min-width: ${device.laptop}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 75px;
  }
`;
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.elements};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 5px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  margin: 0 25px 20px 25px;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: ${device.laptop}) {
    margin: 0;
  }
`;

export const FlagContainer = styled.div<FlagContainerProps>`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 175px;
`;

export const CountryInfo = styled.div`
  margin: 0 30px 30px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text};
  & span {
    font-weight: bold;
  }
`;

export const Heading = styled.h2`
  font-size: 1.2em;
  font-family: ${({ theme }) => theme.fonts.extraBold};
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.text};
`;