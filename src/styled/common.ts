import styled from "styled-components";

export const ErrorMessage = styled.div`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.extraBold};
`;
