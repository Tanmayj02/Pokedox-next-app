import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { fetchPokemons } from "../redux/slice/pokemonslice";

store.dispatch(fetchPokemons());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
