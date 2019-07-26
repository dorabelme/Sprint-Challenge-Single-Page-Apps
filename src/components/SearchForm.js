import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonExampleShorthand from "./Button";

const SearchDiv = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  return (
    <SearchDiv className="search-form">
      <form onSubmit={(event) => {
        event.preventDefault()
        onSearch(query)
      }}>
        <input
          onChange={handleInputChange}
          placeholder="Name"
          value={query.name}
          name="name"
        />
        <ButtonExampleShorthand type="submit" content="Search"></ButtonExampleShorthand>
      </form>
    </SearchDiv>
  );
}
