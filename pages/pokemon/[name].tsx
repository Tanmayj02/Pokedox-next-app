import { useRouter } from "next/router";
import PokemonCharateristics from "../../components/Pokemoncharacteristics";

function displayPokemonCharateristics() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const name = router.query.name;

  return <PokemonCharateristics name={name} />;
}

export default displayPokemonCharateristics;
