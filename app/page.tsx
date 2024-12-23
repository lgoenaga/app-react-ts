"use client";

import { useState, useEffect, MouseEventHandler } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { LazyImage } from "../components/randomfox";
type Imageitem = { id: number; url: string };

const Home: NextPage = () => {
	const zorro = (): number => Math.floor(Math.random() * 123) + 1;
	const [images, setImages] = useState<Imageitem[]>([]);

	//Generar un id unique para cada imagen
	const generateUniqueId = (): number => {
		return Date.now() + Math.floor(Math.random() * 1000);
	};

	useEffect(() => {
		const img = `https://randomfox.ca/images/${zorro()}.jpg`;
		setImages([{ id: generateUniqueId(), url: img }]);
	}, []);

	const addImage: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		const newImage: Imageitem = {
			id: generateUniqueId(),
			url: `https://randomfox.ca/images/${zorro()}.jpg`,
		};
		setImages((images) => [...images, newImage]);
	};

	return (
		<div>
			<Head>
				<title>App-Goenaga</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="App-Goenaga" />
			</Head>
			<main>
				<button
					onClick={(event) => {
						addImage(event);
					}}
					className="mb-4 p-2 bg-blue-500 text-white rounded"
				>
					Add Image
				</button>
				<h1 className="text-3xl font-bold">Random Fox</h1>
				{images.map((image) => (
					<div key={image.id} className="p-4">
						<LazyImage
							image={image.url}
							rel="preload"
							onClick={() => {
								console.log("click en la imagen");
							}}
							width={320}
							height="auto"
							className="rounded bg-gray-400"
						/>
					</div>
				))}
			</main>
			<footer></footer>
		</div>
	);
};

export default Home;
