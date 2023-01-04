import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* padding: 0 20px; */
  /* max-width: 1280px; */
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoadingIcon = styled(FontAwesomeIcon)`
  animation: spin infinite 5s linear;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${({ theme }) => theme.colors.text};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
