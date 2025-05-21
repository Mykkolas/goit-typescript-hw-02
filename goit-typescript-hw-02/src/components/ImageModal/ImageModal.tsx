import Modal from "react-modal"
import { useEffect } from "react";
import s from "./ImageModal.module.css";
import { FaPerson } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onClose }) {

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);
    if (!isOpen || !image) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={s.modal}
            overlayClassName={s.overlay}
        >
            <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                <img src={image.modalPhoto} alt="Selected image" className={s.modalImage} />
                <p className={s.author}><FaPerson /> {image.name}</p>
                <p className={s.likes}><FcLike /> {image.likes}</p>
            </div>
        </Modal>

    )
}