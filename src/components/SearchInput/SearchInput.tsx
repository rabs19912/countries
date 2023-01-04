import React from "react";
import { useCountries } from "../../context/countries";
import { Input, InputContainer, SearchIcon } from "./styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchTypes } from "../../types/common";

function SearchInput() {
  const { setSearchParam, setSearchType, searchType } = useCountries();
  const ref = React.useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchParam(event.target.value);
    setSearchType(SearchTypes.text);
  }

  React.useEffect(()=>{
    if (searchType === SearchTypes.region && ref.current) {
      ref.current.value = "";
    }
  },[searchType, ref])
  return (
    <InputContainer>
      <SearchIcon icon={faMagnifyingGlass} />
      <Input
        type="text"
        placeholder="Search for a country"
        onChange={handleChange}
        ref={ref}
      />
    </InputContainer>
  );
}

export { SearchInput };
