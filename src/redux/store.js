import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { checkAllowedWords } from './middleware'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, checkAllowedWords),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store