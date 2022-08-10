import PokemonCard from "./pokemoncard";

function HomePage() {
  return (
    <div className="p-3 text-center bg-light">
      <h1 className="mb-1">Welcome to Pokedox</h1>
      <PokemonCard />
    </div>
  );
}

export default HomePage;
