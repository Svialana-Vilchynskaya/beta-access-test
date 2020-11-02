import React from 'react'
import Alert from '@material-ui/lab/Alert';

function CustomAlert({ type = 'error' , text}) {
	return (
		<Alert severity={type}>{text}</Alert>
	)
}

export default CustomAlert