import { Routes, Route } from "react-router-dom";
import { CountriesProvider } from "./context/countries";
import CountriesList from "./pages/CountriesList";
import { CountryDetails } from "./pages/CountryDetail/CountryDetails";

const PATHS = {
  home: "/",
  countryDetail: "/detail/:countryCode",
};

function AppRoutes() {
  const getRoutes = () => {
    return (
      <Routes>
        <Route path={PATHS.home}>
          <Route
            index
            element={
              <CountriesProvider>
                <CountriesList />
              </CountriesProvider>
            }
          />
          <Route path={PATHS.countryDetail} element={<CountryDetails />} />
        </Route>
      </Routes>
    );
  };
  return <>{getRoutes()}</>;
}
export { PATHS };
export default AppRoutes;
