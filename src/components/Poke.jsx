import React from "react";
import { useState } from "react";

const Poke = () => {
  const [pokemon, setPokemon] = useState();
  // const [result, setResult] = useState();

  const fetchPokemonAll = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => {
        // not the actual JSON response body but the entire HTTP response
        return response.json();
      })
      .then((jsonResponse) => {
        // we now run another promise to parse the HTTP response into usable JSON
        console.log(jsonResponse.results);

        setPokemon(jsonResponse.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Poke</h1>
      <button onClick={fetchPokemonAll}>Fetch Poke</button>
      {/* {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
        </div>
      ) : (
        <h3>Please Fetch a pokemon</h3>
      )} */}

      {/* pokemon && is alternative to ternary = hotwiring to say that if it do */}
      {pokemon &&
        pokemon.map((poke, idx) => {
          return (
            <div key={idx}>
              {/* <img src={idx.sprites.front_default} alt={idx.name} /> */}
              <p>{poke.name}</p>
              {/* <p>id: {poke[idx].idx}</p> */}
            </div>
          );
        })}
    </div>
  );
};

export default Poke;
