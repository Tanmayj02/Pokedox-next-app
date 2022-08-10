import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Pokemon from "./pokemon";

function PokemonCard() {
  const ShowAllPokemon = () => {
    const allPokemons: any = useSelector((state: any) => state.pokemons);
    const [allPokemonList, setAllPokemonList] = useState([]);

    useEffect(() => setAllPokemonList(allPokemons), [allPokemons]);
    return allPokemonList.map((singlePoke: any) => (
      // way 1
      <Pokemon
        key={singlePoke.username}
        name={singlePoke.username}
        image={singlePoke.sprites.other.dream_world.front_default}
      />
    ));
  };

  return <Row>{ShowAllPokemon()}</Row>;
}

export default PokemonCard;
