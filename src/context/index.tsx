import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styled/global";
import { theme, darkTheme } from "../styled/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTheme } from "./theme";
import React from "react";
type AppProvidersProps = {
  children: React.ReactNode | JSX.Element;
};

const defaultProps: Partial<AppProvidersProps> = {
  children: null,
};
const queryClient = new QueryClient();

function AppProviders({ children }: AppProvidersProps) {
  const { selectedTheme } = useTheme();

  const themeMode = selectedTheme === "light" ? theme : darkTheme;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={themeMode}>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

AppProviders.defaultProps = defaultProps;
export default AppProviders;
