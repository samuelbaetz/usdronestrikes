const initialState = {
    strikes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET':
            return{
                ...state,
                strikes: action.value
            }
    }
    return state
}
export default reducer