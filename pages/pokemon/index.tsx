/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import PokemonCharateristics from "../../components/Pokemoncharacteristics";
import HomePage from "../../components/Homepage";
import { useState } from "react";
import { useJwt } from "react-jwt";
import Link from "next/link";

function DisplayAllPokemon() {
  const [accessId, setAccessId] = useState<string>();
  const [user, setUser] = useState<string>("text");

  const getAccessId = async (url: string) => {
    const myArray = await url.split("access_token=");
    let word = myArray[1];
    const myUpdatedArray = word.split("&expires_in");

    return myUpdatedArray[0];
  };

  function fetchItems(sessionToken: string) {
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
    getAccessId(url).then((res) => setAccessId(res));
    if (accessId !== "text" && accessId !== undefined)
      fetchItems(accessId).then((res) => console.log(res));
    //const decoded: any = useJwt(accessId);
  };

  fetchUsingId();

  return (
    <>
      <h1> Welcome to Pokedox</h1>
      <Link href={`http://localhost:3000/`}>
        <button className="btn btn-primary"> Logout</button>
      </Link>
      <HomePage />
    </>
  );
}

export default DisplayAllPokemon;
