const INITIAL_STATE = [
    {
        "name": "Bacon & eggs",
        "items": [
            {
                "name": "Bacon",
                "ing": [
                    {
                        "type": "Pork",
                        "ingName": "Meat"
                    },
                ],
            },
            {
                "name": "Ham Eggs",
                "ing": [
                    {
                        "type": null,
                        "ingName": "Egg"
                    },
                ],
            }
        ]
    },
    {
        "name": "Hamburger",
        "items": [
            {
                "name": "Meat",
                "ing": [
                    {
                        "type": null,
                        "ingName": "Pork"
                    },
                ],
            },
            {
                "name": "Bread",
                "ing": [
                    {
                        "type": null,
                        "ingName": "Flour"
                    },
                    {
                        "type": null,
                        "ingName": "Water"
                    },
                ],
            },
            {
                "name": "Cheese",
                "ing": [
                    {
                        "type": null,
                        "ingName": "Milk"
                    },
                ],
            }
        ]
    },
    {
        "name": "English breakfast",
        "items": [
            {
                "name": "Fried eggs",
                "ing": [
                    {
                        "type": null,
                        "ingName": "Egg"
                    },
                ],
            },
            {
                "name": "Mushrooms",
                "ing": [],
            },
            {
                "name": "Sausages",
                "ing": [
                    {
                        "type": "Pork",
                        "ingName": "Meat"
                    },
                ],
            },
            {
                "name": "Bread",
                "ing": [
                    {
                        "type": null,
                        "ingName": "Flour"
                    },
                    {
                        "type": null,
                        "ingName": "Water"
                    },
                ],
            }
        ]
    }
]


const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default dataReducer;

