import type { UnsplashImage } from "../../types/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface Props {
    images: UnsplashImage[];
    onImageClick: (image: UnsplashImage) => void;
}

export default function ImageGallery({ images, onImageClick }: Props) {
    return (
        <div>
            <ul className={s.gallery}>
                {images.map((image) => {
                    return (
                        <li key={image.id} className={s.galleryItem}>
                            <ImageCard
                                image={image}
                                onClick={onImageClick}
                            />

                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
