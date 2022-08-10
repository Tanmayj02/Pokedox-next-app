/* eslint-disable no-await-in-loop */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = [];

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons",
  async () => {
    try {
      const pokemonList: any = [];
      for (let i = 1; i <= 10; i += 1) {
        const initialResponse = await fetch(
          `https://2y2g1bd5wl.execute-api.ap-south-1.amazonaws.com/Dev/pokemon/${i}`
        );
        const response = await initialResponse.json();
        // const currentPokemonDetail: any = {};
        // currentPokemonDetail.name = response.Items[0].username;
        // currentPokemonDetail.image =
        //   response.Items[0].sprites.other.dream_world.front_default;

        const currentPokemonDetail: any = { ...response.Items[0] };
        pokemonList.push(currentPokemonDetail);
      }
      return pokemonList;
    } catch (error: any) {
      return error.message;
    }
  }
);

const pokemonsSlice: any = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => action.payload);
  },
});

// export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
