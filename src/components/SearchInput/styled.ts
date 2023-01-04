import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { device } from "../../styled/device";

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
`;
export const Input = styled.input`
  width: 80%;
  display: block;
  height: 50px;
  border: none;
  padding: 0;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 5px;
  font-family: NunitoSans-Regular, sans-serif;
  font-size: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.input};
  outline: none;
  padding-left: 70px;

    @media (min-width: ${device.laptop}) {
      width: 400px;
      height: 55px;
    }

  &::placeholder {
    color: ${({theme}) => theme.colors.text};
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translate(0, -50%);
  color: ${({theme}) => theme.colors.text};
`;
