import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../slice/pokemonslice";

const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});

export default store;
