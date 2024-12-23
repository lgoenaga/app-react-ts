import { JSX } from "react";

export const Randomfox = (): JSX.Element => {
	// Generarar un numero que muestre una imagen de un zorro aleatorio
	const zorro = (): number => Math.floor(Math.random() * 123) + 1;
	const image: string = `https://randomfox.ca/images/${zorro()}.jpg`;

	return (
		<div>
			<h1>{`Random Fox ${zorro()}`}</h1>
			<img className="rounded" width={320} height="auto" src={image} alt={`Random Fox ${zorro()}`} />
		</div>
	);
}