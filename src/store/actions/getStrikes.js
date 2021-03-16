import API from '../../utils/API'
export const GET = "GET"
export const get = (res) => {
    return{
        type: GET,
        value: res
    }
}

export const getStrikes = () => {
    return dispatch => {
        API.getData()
        .then(res => {
            dispatch(get(res.data))
        })
    }
}