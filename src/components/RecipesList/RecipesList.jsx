import React, { useState } from 'react'
import Recipe from '../Recipe'

import "./RecipesList.css"

const RecipesList = ({ SearchRes, SearchTerm }) => {

    const [Active, setActive] = useState(null)

    const toggle = (i) => {
        if (Active === i) {
            return setActive(null)
        }

        setActive(i)
    }

    return (
        <ol className='recipeItem'>{SearchRes ? SearchRes.map((recipe, i) => {
            return (
                <React.Fragment key={i}>
                    <li
                        onClick={() => toggle(i)}>
                        {Active === i ? <mark>{recipe[0][0].name}</mark> : recipe[0][0].name}
                        <span>
                            {Active === i ? "-" : "+"}
                        </span>
                    </li>

                    <ol className={Active === i ? "show" : "hide"}>
                        <Recipe
                            recipe={recipe[0]}
                            SearchTerm={SearchTerm}
                            Active={Active} />
                    </ol>
                </React.Fragment>
            )
        }) : <p>No Matching Ingredients</p>}</ol >
    )
}

export default RecipesList