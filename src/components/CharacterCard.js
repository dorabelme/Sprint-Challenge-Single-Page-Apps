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

export default function CharacterCard (props) {
  const { character } = props;
  return (
    <CardContent>
      <img className="main-img ui centered medium" src={character.image} alt={character.name}></img>
      <Title>{character.name}</Title>
      <StyledPar>Species: {character.species} {character.status}</StyledPar>
      {/* <StyledP>Status: {character.status}</StyledP> */}
      <StyledP>Origin: {character.origin.name}</StyledP>
      <StyledP>Location: {character.location.name}</StyledP>
      <StyledPar>Episodes</StyledPar>
    </CardContent>)
}
