import React from 'react'

function PokemonList({pokemon}) {
  return (
    <>
   
    <div className='name'>{pokemon.map(p=>(
        <ul>
       <li className='title' key={p}> {p}</li></ul>
    ))}</div>
  
  </>)
}

export default PokemonList;