import Head from "next/head";

export default function Home() {
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
			</main>
			<footer></footer>
		</div>
	);
}
