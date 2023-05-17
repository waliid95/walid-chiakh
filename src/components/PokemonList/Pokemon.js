import { useEffect, useState } from "react"
 export default function Pokemon({poke}){
     const [pokemon, setPokemon] = useState({})
     useEffect(()=>{
         async function getPokemon(){
             const response = await fetch(poke.url)
             const data = await response.json()
             setPokemon(data)
         }
         getPokemon()
     },[])
     return (
             <li key={pokemon.name}> 
             <img alt={pokemon.name} src={pokemon?.sprites?.front_default} /> 
             {pokemon.name}
             </li>
         )
 }

