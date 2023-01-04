import React from "react";
import { useCountries } from "../../context/countries";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  DropdownText,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { SearchTypes } from "../../types/common";
import { regions } from "../../common/constants";

function Dropdown() {
  const { setSearchParam, setSearchType, searchParam, searchType } = useCountries();
  const [openDropdown, setOpenDropdown] = React.useState(false);
  function toggleDropdown() {
    setOpenDropdown(!openDropdown);
  }
  const [title, setTitle] = React.useState('Filter By Region')
  React.useEffect(()=>{
    if (searchType === SearchTypes.region) {
      setTitle(searchParam);
      return;
    };
    setTitle('Filter By Region');
    
  },[searchType, searchParam])

  function setRegion(region: string) {
    setSearchType(SearchTypes.region);
    setSearchParam(region.toLocaleLowerCase());
    toggleDropdown();
  }
  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        <DropdownText>{title}</DropdownText>
        <FontAwesomeIcon icon={faChevronDown} />
      </DropdownHeader>
      <DropdownList open={openDropdown}>
        {regions.map((region, index) => {
          return (
            <DropdownItem key={index} onClick={() => setRegion(region)}>
              {region}
            </DropdownItem>
          );
        })}
      </DropdownList>
    </DropdownContainer>
  );
}

export { Dropdown };
