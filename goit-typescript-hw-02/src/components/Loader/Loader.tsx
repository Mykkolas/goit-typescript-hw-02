import { RingLoader } from "react-spinners"
import s from "../Loader/Loader.module.css"

interface Props {
    loading: boolean
}

export default function Loader({ loading }: Props) {
    return (
        loading &&
        <div className={s.loader}>
            <RingLoader color="#3498db" loading={loading} size={50} />
        </div>
    )
}