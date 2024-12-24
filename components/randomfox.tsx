import { JSX, useEffect, useRef, useState, ImgHTMLAttributes } from "react";
type LazyProps = { image: string, onLazyLoad?: (img: HTMLElement) => void };
type ImageNative = ImgHTMLAttributes<HTMLImageElement>
type Props = LazyProps & ImageNative;

export const LazyImage = (props: Props): JSX.Element => {
	const imageRef = useRef<HTMLImageElement>(null);
	const [src, setSrc] = useState<string>(
		"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
	);

	const onLazyLoad = () => {
		console.log("Imagen cargada");
	};

	const { onLazyLoad: handleLazyLoad } = props;

	useEffect(() => {
		if (handleLazyLoad && imageRef.current) {
			handleLazyLoad(imageRef.current);
		}
	}, [handleLazyLoad]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setSrc(props.image);
					observer.disconnect();
				}
			});
		});

		if (imageRef.current) observer.observe(imageRef.current as Element);

		return () => {
			observer.disconnect();
		};
	}, [props.image, props.onLazyLoad]);	

	return (
		<div>
			<img
				ref={imageRef}
				src={src}
				alt="Random Fox"
				{...props}
				loading="lazy"
				onLoad={onLazyLoad}
			/>
		</div>
	);
};
