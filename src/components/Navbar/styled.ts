import styled from "styled-components";
import { device } from "../../styled/device";

export const HeaderWrapper = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.elements};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.colors.boxShadow};
  -moz-box-shadow: ${({ theme }) => theme.colors.boxShadow};
  margin-bottom: 20px;

  @media (min-width: ${device.laptop}) {
     padding: 0 75px;
     margin-bottom: 50px;
  }
`;

export const HeaderText = styled.div`
  font-family: ${({ theme }) => theme.fonts.extraBold};
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: ${device.laptop}) {
      font-size: 1.4em;
  }
`;

