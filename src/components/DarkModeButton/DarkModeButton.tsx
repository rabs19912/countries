import { useTheme } from "../../context/theme";
import { Themes } from "../../types/common";
import { DarkModeContainer, Text } from "./styled";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DarkModeButton() {
  const { toggleThemeMode, selectedTheme } = useTheme();
  const isDarkMode = selectedTheme === Themes.light;
  const themeModeText = isDarkMode ? "Dark Mode" : "Light Mode";
  const icon = isDarkMode ? faMoon : faSun;

  return (
    <DarkModeContainer onClick={toggleThemeMode}>
      <FontAwesomeIcon icon={icon} />
      <Text>{themeModeText}</Text>
    </DarkModeContainer>
  );
}

export { DarkModeButton };
