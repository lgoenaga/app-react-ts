import { JSX, useEffect, useRef, useState } from "react";
type Props = {image: string};

export const Randomfox = (props: Props): JSX.Element => {
	const imageRef = useRef<HTMLImageElement>(null);
	const [src, setSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=");
	useEffect (() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSrc(props.image);
					observer.disconnect();
				}
			}
			);
		}
		);

		if (imageRef.current)
			observer.observe(imageRef.current as Element);

		return () => {
			observer.disconnect();
		};

	}, [ props.image ]);

	return (
		<div>
			<img className="rounded bg-gray-400" ref={imageRef} width={320} height="auto" src={src} alt="Random Fox"/>
		</div>
	);
}