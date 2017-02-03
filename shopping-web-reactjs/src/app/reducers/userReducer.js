const userReducer = (state = {
    name: "Max",
    age: 27,
    shops: []
}, action) => {
    switch (action.type) {
        case "SET_NAME_FULFILLED":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        case "SET_SHOPS":
            state = {
                ...state,
                    shops: action.payload
            };
            break;
    }

    return state;
};

export default userReducer;