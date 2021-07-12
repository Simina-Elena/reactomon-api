import React, { useState, useEffect, useContext } from 'react'
import PokemonCard from './PokemonCard'
import "./PokemonsList.css"
import ThemeContext from '../../context/ThemeContext'
import AppTheme from '../../Colors'

function PokemonList() {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(result => { return result.json() }).then(res => {
        // console.log(res)
        setPokemons(res.results)
        setLoading(false)
      })

  }, [])


  if (loading) {
    return "loading..."
  }
  return (

    <div style = {{
      padding: "1rem",
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`,
  }}
    className="Pokemons"> {pokemons.map(pokemon => 
    <PokemonCard name={pokemon.name} url={pokemon.url} />)} </div>
   
  )
}

export default PokemonList
