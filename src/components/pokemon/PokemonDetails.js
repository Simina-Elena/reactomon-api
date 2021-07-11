import React, { useState, useEffect } from 'react'
import styled from "styled-components"


function PokemonDetails(props) {

    const [isLoading, setLoading] = useState(true)
    const [pokemon, setPokemonDetails] = useState({})


    useEffect(() => {
        setPokemonDetails(props.location.state);
        console.log(props)
        setLoading(false);
    }, [props.location.state]);


    if (!isLoading) {
        return (
            <div>
                <H1>{pokemon.name}</H1>
                <Box>
                    <Img src={pokemon.sprites.front_default} alt="" />
                    <Img src={pokemon.sprites.back_default} alt="" />
                </Box>
                <FlexBox>
                    <InformationBox>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Height: {pokemon.height}</p>
                        <p>Species: {pokemon.species.name}</p>
                    </InformationBox>
                    <InformationBox>
                        <h3>Types:</h3>
                        {pokemon.types.map((type) => {
                            return <p key={type.type.name}>- {type.type.name}</p>;
                        })}
                    </InformationBox>
                    <InformationBox>
                        <h3>Abilities:</h3>
                        {pokemon.abilities.map((ability) => {
                            return <p key={ability.ability.name}>- {ability.ability.name}</p>;
                        })}
                    </InformationBox>
                </FlexBox>
            </div>
        )
    }
    return <div></div>;

}

const Img = styled.img`
  height: 300px;
  position: relative;
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
`;

const H1 = styled.h1`
  font-size: 48px;
  text-align: center;
  padding: 10px;
  width: 100%;
  border: 1px black solid;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  height: auto;
  border: 1px black solid;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
`;

const InformationBox = styled.div`
  padding: 20px;
  font-size: 25px;
  line-height: 50px;
  border: 1px black solid;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  flex: 1;
  text-align: center;
  width: 100%;
  overflow-wrap: break-word;
  height: 100%;
  min-width:200px;
`;

export default PokemonDetails
