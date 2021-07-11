import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom'


function PokemonTypes() {

    const [isLoading, setLoading] = useState(true)
    const [types, setTypes] = useState([])


    useEffect(() => {
        setLoading(true)
        fetch("https://pokeapi.co/api/v2/type")
            .then(result => { return result.json() }).then(res => {
                console.log(res.results);
                setTypes(res.results)
                setLoading(false)
            })

    }, [])
    const url = "https://pokeapi.co/api/v2/type"

    useEffect(() => {
        setLoading(true)
        fetch("https://pokeapi.co/api/v2/type")
    }, [])


    if (!isLoading) {

        return (
            <Link >
            <div> {types.map(type => <Type>{type.name}</Type>)} </div>
            </Link>
        )
    }
    return "loading types..."
}


const Type = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export default PokemonTypes
