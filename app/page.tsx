"use client";

import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Randomfox } from "../components/randomfox";
type Imageitem = { id: number,  url: string };

const Home: NextPage = () => {
	const zorro = (): number => Math.floor(Math.random() * 123) + 1;
  const img = `https://randomfox.ca/images/${zorro()}.jpg`;

	const [images, setImages] = useState<Imageitem[]>([
		{ id: zorro(), url: img },

	]);

	const addImage = () => {
		setImages((prev) => [
			...prev,
			{
				id: zorro(),
				url: `https://randomfox.ca/images/${zorro()}.jpg`,
			},
		]);
	}

	return (
		<div>
			<Head>
				<title>App-Goenaga</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="App-Goenaga" />
			</Head>
			<main>
        <button
          onClick={() => {
						addImage();
          }}
          className="mb-4 p-2 bg-blue-500 text-white rounded"
        >
          Add Image
        </button>
				<h1 className="text-3xl font-bold">Random Fox</h1>
				{images.map((image) => (
					<div key={image.id} className="p-4">
						<Randomfox image={image.url} />
					</div>
				))}
			</main>
			<footer></footer>
		</div>
	);
};

export default Home;
