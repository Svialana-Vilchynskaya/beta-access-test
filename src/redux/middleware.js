import { setBetaAuth } from './actions'
import { FIRST_PAGE_LOAD } from './types'

export const checkAllowedWords = ({dispatch}) => next => action => {
	if(action.type === FIRST_PAGE_LOAD){
		const isBetaAuth = localStorage.getItem('isBetaAuth')
		isBetaAuth && dispatch(setBetaAuth())
	}
	return next(action)
}