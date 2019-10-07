import React from 'react';
import styled from 'styled-components';

const CardContent = styled.div`
    width: 400px;
    background: #white;
    box-shadow: 1rem 1rem 5rem rgba(30, 49, 78, 0.14);
    margin: 3rem auto;
    padding: 1rem 2rem;
    min-height: 16.5rem;
    // text-align: center;
`;

const Image = styled.div`
  width: 100%;

`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: black;
`;

const StyledP = styled.p`
  font-size: 18px;
  color: black;
`;

const StyledPar = styled.p`
  font-size: 16px;
  color: grey;
`;


export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <CardContent>
      <Title>{ name }</Title>
      <StyledP>Type: {type}</StyledP>
      {/* <StyledP>Status: {character.status}</StyledP> */}
      <StyledP>Dimension: {dimension}</StyledP>
      <StyledPar>Residents: {residents && residents.length}</StyledPar>
    </CardContent>
  )
}
