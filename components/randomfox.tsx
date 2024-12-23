import { JSX } from "react";
type Props = {image: string, zorro: number};

export const Randomfox = (props: Props): JSX.Element => {
	return (
		<div>
			<img className="rounded" width={320} height="auto" src={props.image} alt={`Random Fox ${props.zorro}`} />
		</div>
	);
}