import s from "../ImageCard/ImageCard.module.css"

export default function ImageCard({ alt, name, likes, modalPhoto, cardPhoto, onClick }) {
    return (
        <div onClick={() => onClick({ modalPhoto, name, likes })}>
            <img src={cardPhoto} alt={alt} className={s.imageCard} />
        </div>
    );
};
