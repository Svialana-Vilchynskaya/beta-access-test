import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkWord, setAlert } from '../redux/actions'
import { getAlertMessage, getLoading } from '../redux/appReducer'
//components
import Loader from './Loader'
import CustomAlert from './CustomAlert'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
//styles
import '../styles/components/BetaAccessPage.scss'


function BetaAccessPage() {
	const dispatch = useDispatch()
	const alertMessage = useSelector(getAlertMessage)
	const loading = useSelector(getLoading)
	const [initialState, setInitialState] = useState({
		word: ''
	})

	const onSubmitForm = (e) => {
		e.preventDefault()
		if(!initialState.word){
			dispatch(setAlert('error', 'input can\'t be empty'))
		}
		else{
			dispatch(checkWord(initialState.word))
			setInitialState({ word: '' })
		}
	}

	const onChangeInput = (e) => {
		e.persist()
		setInitialState(prev => ({
			...prev,
			...{ [e.target.name]: e.target.value }
		}))
	}

	return (
		<div className={'betaAccessPage'}>
			<h1>This is a beta access page</h1>
			<h3>If you want to take beta version of the website write a right word (beta, website, test)</h3>
			{loading && <Loader/>}
			{!loading && <form onSubmit={onSubmitForm}>
				<TextField
					value={initialState.word}
					onChange={onChangeInput}
					name="word"
					id="standard-basic"
					label="Type your word here"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
				>
					Check word
				</Button>
			</form>}
			{alertMessage && (
				<CustomAlert
					type={alertMessage.type}
					text={alertMessage.message}
				/>
			)}
		</div>
	)
}

export default BetaAccessPage