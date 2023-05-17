import React from "react";
import Pokemon from './Pokemon'
import { useEffect, useState } from "react";
 
function PokemonList({ searchTerm = "" }) {
  const [list_pokemons, setlist_Pokemon] = useState([])
  useEffect(()=>{
    async function loadlist_Pokemon(){
       const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        const data = await response.json()
        setlist_Pokemon(data.results)
      }
    loadlist_Pokemon()
  }, [])
 
 
  return (
    <ul>
    {
      list_pokemons?.map((pokemon, index)=>{
        if(pokemon.name.includes(searchTerm)){
          return <Pokemon poke={pokemon} />
        }
        return null
      })
    }
    </ul>
  );
}
 
export default PokemonList;