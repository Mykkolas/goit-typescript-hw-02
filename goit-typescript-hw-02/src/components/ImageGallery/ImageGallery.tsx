import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
    return (
        <div>
            <ul className={s.gallery}>
                {images.map(({ id, alt_description, likes, user: { name }, urls: { regular, small } }) => (
                    <li key={id} className={s.galleryItem}>
                        <ImageCard
                            alt={alt_description || "No description available"}
                            name={name}
                            likes={likes}
                            modalPhoto={regular}
                            cardPhoto={small}
                            onClick={onImageClick}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
