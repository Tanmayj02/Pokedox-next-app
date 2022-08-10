import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomePage from "../components/Homepage.tsx";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1> Hello!! first next js project </h1>
      <HomePage />
    </div>
  );
};

export default Home;
