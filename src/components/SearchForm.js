import React, { useState } from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';
import ButtonExampleShorthand from "./Button";
import "../index.css";

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
      <form class="ui form" onSubmit={(event) => {
        event.preventDefault()
        onSearch(query)
      }}>
        <input
          onChange={handleInputChange}
          placeholder="Name"
          value={query.name}
          name="name"
        />
        <ButtonExampleShorthand class ="ui button search" type="submit" content="Search"></ButtonExampleShorthand>
      </form>
    </SearchDiv>
  );
}
