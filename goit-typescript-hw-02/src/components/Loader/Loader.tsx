import { RingLoader } from "react-spinners"
import s from "../Loader/Loader.module.css"
export default function Loader({ loading }) {
    return (
        loading &&
        <div className={s.loader}>
            <RingLoader color="#3498db" loading={loading} size={50} />
        </div>
    )
}