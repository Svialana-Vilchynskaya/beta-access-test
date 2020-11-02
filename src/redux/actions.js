import { FIRST_PAGE_LOAD, HIDE_ALERT, HIDE_LOADER, SET_IS_BETA_AUTH, SHOW_ALERT, SHOW_LOADER } from './types'
import { fetchWords } from '../api/wordsApi'

export const setBetaAuth = () => ({ type: SET_IS_BETA_AUTH, auth: true})
export const firstPageLoad = () => ({type: FIRST_PAGE_LOAD})
export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})
export const showAlert = ({type,message}) => ({type: SHOW_ALERT, alertMessage:{type, message}})
export const hideAlert = () => ({type: HIDE_ALERT})

export const checkWord = newWord => async (dispatch) =>{
	dispatch(showLoader(true))
	try {
		const words = await fetchWords()
		const found = words.filter(word => word === newWord)
		if (found.length) {
			localStorage.setItem('isBetaAuth', 'true')
			dispatch(hideLoader())
			dispatch(setAlert('success','OK, let\'s go'))
			setTimeout(() => {
				dispatch(setBetaAuth())
			}, 1500)
		} else{
			dispatch(hideLoader())
			dispatch(setAlert('error','You wrote a wrong word!'))
		}
	} catch (e) {
		dispatch(hideLoader())
		dispatch(setAlert('error','Some problems with server.'))
	}
}
export const setAlert = (type, message) => async dispatch => {
	dispatch(showAlert({type, message}))
	setTimeout(() => {
		dispatch(hideAlert())
	}, 2500)
}


