import React from 'react'

const Recipe = ({ recipe, SearchTerm }) => {

    const Highlight = ({ ing, match }) => {

        let regex = new RegExp(`(${match}+)`, 'i')

        let parts = ing.split(regex)

        return (parts.map((part, i) => regex.test(part) ? <mark key={i}>{part}</mark> : part))
    }

    return (
        <ol style={{ listStyleType: "lower-alpha" }}>

            {recipe[0].items.map((item, i) =>
                <li key={i}>
                    {item.name}

                    <ol style={{ listStyleType: "lower-roman" }}>
                        {item.ing.map((ing, i) =>
                            <li key={i}>

                                <Highlight
                                    key={i}
                                    ing={ing.ingName}
                                    match={SearchTerm}
                                />

                                {ing.type &&
                                    <ol>
                                        <li key={i}>
                                            {/* Highlight sub-ingredient for second | Solution 2  */}
                                            <Highlight
                                                key={i}
                                                ing={ing.type}
                                                match={SearchTerm}
                                            />

                                        </li>
                                    </ol>}
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}

export default Recipe