import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { json } from "stream/consumers";
import { useState } from "react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <h1 className="align-items-center"> Welcome to the Pokedox </h1>
      <Link
        href={`https://pokedoxappdomain.auth.ap-south-1.amazoncognito.com/login?client_id=hf65vg8fd6gbu6uschbtfm082&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/pokemon`}
      >
        <button className="btn btn-primary"> Login / Signup to continue</button>
      </Link>
    </>
  );
};

export default Home;
