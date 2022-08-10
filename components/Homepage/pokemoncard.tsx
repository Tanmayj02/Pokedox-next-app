import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Pokemon from "./pokemon";

function PokemonCard() {
  const ShowAllPokemon = () => {
    const allPokemons: any = useSelector((state: any) => state.pokemons);
    return allPokemons.map((singlePoke: any) => (
      // way 1
      <Pokemon
        key={singlePoke.username}
        name={singlePoke.username}
        image={singlePoke.sprites.other.dream_world.front_default}
      />
      // way 2
      // return allPokemons.map((singlePoke: any) => (
      //   <div key={singlePoke.username}>Hi</div>
    ));
  };
  return (
    <Container fluid>
      <Row>{ShowAllPokemon()}</Row>
    </Container>
  );
}

export default PokemonCard;
