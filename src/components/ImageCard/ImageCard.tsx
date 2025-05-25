import type { UnsplashImage } from "../../types/types";
import s from "../ImageCard/ImageCard.module.css"

interface Props {
    image: UnsplashImage
    onClick: (image: UnsplashImage) => void;
}

export default function ImageCard({ image, onClick }: Props) {
    return (
        <div onClick={() => onClick(image)}>
            <img src={image.urls.small} alt={image.alt_description} className={s.imageCard} />
        </div>
    );
};
