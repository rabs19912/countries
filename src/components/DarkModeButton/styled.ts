import styled from "styled-components";
import { device } from "../../styled/device";


export const DarkModeContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  margin-left: 5px;
`