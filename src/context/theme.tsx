import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Country, Themes } from "../types/common";

type ContextProps = {
  selectedTheme: string;
  toggleThemeMode: () => void
};

const ThemeContext = React.createContext<ContextProps>({
  selectedTheme: "light",
  toggleThemeMode: () => {}
});



function ThemeProvider(props: any) {
  const [selectedTheme, setSelectedTheme] = React.useState("light");
	const toggleThemeMode = React.useCallback(()=>{
		const newTheme = selectedTheme === Themes.light ? Themes.dark : Themes.light;
		setSelectedTheme(newTheme);
	},[setSelectedTheme, selectedTheme])

  const value = React.useMemo(() => {
    return {
      selectedTheme,
      toggleThemeMode,
    };
  }, [selectedTheme, toggleThemeMode]);

  return <ThemeContext.Provider {...props} value={value} />;
}

function useTheme(): ContextProps {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("IpDetails must be used within an ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme, ThemeContext };
