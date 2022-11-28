import { SET_LOCATION } from '../types';

const initState = {
    lat: null,
    lon: null,
    name: ''
}

export const locationReducer = (state=initState, action) => {
    switch(action.type) {
        case(SET_LOCATION): {
            localStorage.setItem('redux-persist-location', JSON.stringify(action.payload))
            return {
                ...state,
                location: {
                    lat: action.payload.lat,
                    lon: action.payload.lon,
                    name: action.payload.name,
                }
            }
        }
        default:
            return state;
    }
}