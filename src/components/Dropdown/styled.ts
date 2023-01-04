import styled, { css } from "styled-components";
type DropdownListProps = {
  open: boolean;
};
export const DropdownHeader = styled.div`
  border: none;
  width: 210px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({theme}) => theme.colors.theme};
`;
export const DropdownText = styled.div`
  padding: 15px 15px 15px 0;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
`;

export const DropdownList = styled.ul<DropdownListProps>`
  list-style: none;
  padding: 20px 20px 10px;
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  width: 170px;
  margin-top: 5px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 5px;
  margin-bottom: 0;
  display: none;
  position: absolute;
  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
`;

export const DropdownItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    font-weight: bold;
  }
`;
export const DropdownContainer = styled.div`
  position:  relative;
  margin-bottom: 40px;
  cursor: pointer;
`
