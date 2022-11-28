import { createStore } from 'redux';
import rootReducer from '../reducers';

let persistedState
const persistedLocationString = localStorage.getItem('redux-persist-location');
if (persistedLocationString) {
    persistedState = {
        location: JSON.parse(persistedLocationString)
    }
}

const store = createStore(rootReducer, persistedState);

export default store;
