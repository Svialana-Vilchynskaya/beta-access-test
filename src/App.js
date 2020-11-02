import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsBetaAuth } from './redux/appReducer'
import { firstPageLoad } from './redux/actions'
//components
import WebsitePage from './components/WebsitePage'
import BetaAccessPage from './components/BetaAccessPage'


function App() {
	const dispatch = useDispatch()
	const isBetaAuth = useSelector(getIsBetaAuth)

	useEffect(() => {
		dispatch(firstPageLoad())
	}, [dispatch])

	if (!isBetaAuth) {
		return <BetaAccessPage/>
	}

	return (
		<div className="App">
			<WebsitePage/>
		</div>
	)
}

export default App
