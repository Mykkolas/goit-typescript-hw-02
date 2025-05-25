import React, { useState, type JSX } from "react"
import s from "../SearchBar/SearchBar.module.css"
import toast from "react-hot-toast"
import { CiSearch } from "react-icons/ci";

interface Props {
    onSubmit: (query: string) => void;
    disabled: boolean
}


export default function SearchBar({ onSubmit, disabled }: Props): JSX.Element {
    const [query, setQuery] = useState<string>("")
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setQuery(e.target.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
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