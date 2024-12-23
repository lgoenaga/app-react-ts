import type { NextPage } from "next";
import Head from "next/head";
import { Randomfox } from "../components/randomfox";


const Home: NextPage = () => {
  const zorro = (): number => Math.floor(Math.random() * 123) + 1;
  const image: string = `https://randomfox.ca/images/${zorro()}.jpg`;
  return (
    <div>
      <Head>
        <title>App-Goenaga</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="App-Goenaga" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold">{`Random Fox ${zorro()}`}</h1>
        <Randomfox image={image} zorro={zorro()}/>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
