import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <h1> Hello!! first next js project </h1> */}
      <h1 className={styles.title}>Welcome to Pokedox</h1>
      <Link href="/pokemon">
        <button className="btn"> Show All Pokemons</button>
      </Link>
    </div>
  );
};

export default Home;
