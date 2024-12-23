import { JSX, useRef } from "react";
type Props = {image: string};

export const Randomfox = (props: Props): JSX.Element => {
	const imageRef = useRef<HTMLImageElement>(null);
	return (
		<div>
			<img className="rounded" ref={imageRef} width={320} height="auto" src={props.image} alt="Random Fox"/>
		</div>
	);
}