import { useRouter } from "next/router";
import PokemonCharateristics from "../../components/Pokemoncharacteristics";

function DisplayPokemonCharateristics() {
  const router = useRouter();
  const name = router.query.name;

  return <PokemonCharateristics name={name} />;
}

export default DisplayPokemonCharateristics;
