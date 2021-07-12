import React, { useState, useEffect, useContext } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext';
import AppTheme from '../../Colors';

function PokemonTypes() {


    const [isLoading, setLoading] = useState(true)
    const [types, setTypes] = useState([])
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    const Type = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: ${currentTheme.textColor}
`;

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
                <div style={{
                    padding: "1rem",
                    backgroundColor: `${currentTheme.backgroundColor}`,

                }}> {types.map(type => <Type>{type.name}</Type>)} </div>
            </Link>
        )
    }

    return "loading types..."

}

export default PokemonTypes
