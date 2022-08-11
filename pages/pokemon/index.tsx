/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import PokemonCharateristics from "../../components/Pokemoncharacteristics";
import HomePage from "../../components/Homepage";
import { useState } from "react";
//import jwt from 'jsonweb'

function DisplayAllPokemon() {
  const [accessId, setAccessId] = useState<string>("text");

  const getAccessId = async (url: string) => {
    const myArray = await url.split("access_token=");
    let word = myArray[1];
    const myUpdatedArray = word.split("&expires_in");

    return myUpdatedArray[0];
  };

  function fetchItems(sessionToken: string) {
    console.log("session token" + sessionToken);

    // var decoded = jwt.decode(sessionToken);
    // console.log(decoded);
    return fetch(
      "https://2y2g1bd5wl.execute-api.ap-south-1.amazonaws.com/Dev/pokemon",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionToken,
        },
      }
    ).then((response) => response.json());
  }

  const fetchUsingId = () => {
    const router = useRouter();
    const url = router.asPath;
    console.log("url" + url);
    getAccessId(url).then((res) => setAccessId(res));
    if (accessId !== "text")
      fetchItems(accessId).then((res) => console.log(res));
  };

  fetchUsingId();

  return (
    <>
      <HomePage />
    </>
  );
}

export default DisplayAllPokemon;
