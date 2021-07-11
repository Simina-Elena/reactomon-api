import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'
import styled from "styled-components";

function PokemonCard(props) {

    const[isLoading, setIsLoading] = useState(true)
    const[pokemon, setPokemon] = useState([])

    useEffect(() => {
        setIsLoading(true)
      fetch(props.url)
      .then(result  => {return result.json()}).then(res => {
          console.log(res)
          setPokemon(res)
          setIsLoading(false)
      })
    
    }, [])
    const pokemonUrl = "/pokemon/" + pokemon.id
    if(isLoading) {
        return <p></p>
    } else {
    
    return (
        
        <Link to={{pathname: pokemonUrl, state: pokemon}}>
        <PokemonBox >
          <img src={pokemon.sprites.front_default} alt="" />
          <PokemonNameBox >
            <p>{pokemon.name}</p>
          </PokemonNameBox>
        </PokemonBox>
      </Link> 
     
     
    )
}
}


const PokemonBox = styled.div`
  width: 150px;
  height: 150px;
  margin: 20px;
  border: 2px black solid;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  padding: 20px;
  img {
    position: absolute;
    top: 0%;
  }
`;

const PokemonNameBox = styled.div`
  border-top:2px black solid;
  width: 100%;
  height: 40px;
  font-size: 24px;
  position: absolute;
  text-align: center;
  bottom: 10%;
`;

export default PokemonCard
