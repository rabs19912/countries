import "./App.css";
import Routes from "./Routes";
import AppProviders from "./context";
import { ThemeProvider } from "./context/theme";
function App() {
  return (
    <ThemeProvider>
      <AppProviders>
        <Routes />
      </AppProviders>
    </ThemeProvider>
  );
}

export default App;
