import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import "./PokemonsList.css"

function PokemonList() {
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])

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

    <div className="Pokemons"> {pokemons.map(pokemon => 
    <PokemonCard name={pokemon.name} url={pokemon.url} />)} </div>

  )

}


export default PokemonList
