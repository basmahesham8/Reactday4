//junction between actions and store

//combine Reducers 
import {combineReducers } from 'redux'

//imports of all reducers 
import {movies} from  './movies'
import {movieDetails} from './movieDetails'

//define function root reducer

const rootReducer =combineReducers ({
    //update feature called movies list from movies reducer
    //the store will have feature movesList
    moviesList:movies,
    details:movieDetails
})
export default rootReducer;

//store
// {
//     moviesList=[
//         {},{},...
//     ]
// }
