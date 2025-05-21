import { useState } from "react"
import s from "../SearchBar/SearchBar.module.css"
import toast from "react-hot-toast"
import { CiSearch } from "react-icons/ci";

export default function SearchBar({ onSubmit, disabled }) {
    const [query, setQuery] = useState("")
    function handleChange(e) {
        setQuery(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const trimQuery = query.trim()

        if (trimQuery === "") {
            toast.error("Please enter query!")
            return
        }

        onSubmit(trimQuery)
        setQuery("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className={s.container}>
                    <button className={disabled ? s.disabledBtn : s.searchBtn} type="submit" disabled={disabled}><CiSearch /></button>
                    <input className={disabled ? s.disabledInput : s.searchInput} type="text" autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        disabled={disabled}
                        onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}