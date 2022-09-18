import React from 'react'
//Redux
import { useSelector } from "react-redux"

const SearchBar = ({ setSearchRes, setSearchTerm }) => {

    //Get ingredients from Store
    const { ingredients } = useSelector((state) => state)

    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {

        if (!e.target.value) return setSearchRes()

        // Get Obj That User Searched By Ingredient. | Solution 1
        const search = ingredients.map(items => items.items.map(item => item.ing.map(ing => ing.ingName.toLowerCase().includes(e.target.value.toLowerCase()) && items)))

        // Get Obj That User Searched By Ingredient and sub-Ingredient. | Solution 2
        // const search = ingredients.map(el => el.items.map(el2 => el2.ing.map(el3 => el3.type ? (el3.type.toLowerCase().includes(e.target.value.toLowerCase()) && el) : (el3.ingName.toLowerCase().includes(e.target.value.toLowerCase()) && el))))

        // Remove Falsy values And Empty Arrays
        const recipes = search.map(el => el.map(el2 => el2.filter((val) => val))).map(el => el.filter(e => e.length)).filter(e => e.length)

        // Set User Input Value
        setSearchTerm(e.target.value)

        // Set Array of Obj with Ing That User Searched For
        setSearchRes(recipes)
    }


    return (
        <div>
            <form className='search' onSubmit={handleSubmit}>
                <input
                    className='search__input'
                    type="text"
                    id="serach"
                    onChange={handleSearchChange}
                />
                <button className='search_button'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar