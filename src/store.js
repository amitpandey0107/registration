import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import registration from './reducers/registration';

const w = window;
let composeEnhancers = compose;
const middleware = [thunk];
composeEnhancers =
    typeof w !== 'undefined' && w['__REDUX_DEVTOOLS_EXTENSION__']
      ? w['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
      : compose;

const rootReducer = combineReducers({
    registration: registration,
})
const appReducer = {
}

export default createStore(
    rootReducer, 
    appReducer, 
    composeEnhancers(
        applyMiddleware(
            ...middleware
        )
    )
)