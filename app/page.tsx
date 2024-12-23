import type { NextPage } from "next";
import Head from "next/head";
import { Randomfox } from "../components/randomfox";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App-Goenaga</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="App-Goenaga" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">APP-GOENAGA</h1>
        <p>Bienvenido a la página de App-Goenaga</p>
        <Randomfox />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
