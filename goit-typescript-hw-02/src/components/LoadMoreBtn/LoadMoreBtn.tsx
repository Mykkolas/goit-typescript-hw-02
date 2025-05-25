import { RingLoader } from "react-spinners"
import s from "../LoadMoreBtn/LoadMoreBtn.module.css"

interface Props {
    onClick: () => void;
    loadingMore: boolean
}

export default function LoadMoreBtn({ onClick, loadingMore }: Props) {
    return (
        <div className={s.loadContainer}>
            <button className={s.loadBtn} onClick={onClick} disabled={loadingMore}>
                {loadingMore ? <RingLoader color="#fff" size={20} /> : "Load more"}
            </button>
        </div>
    )
}