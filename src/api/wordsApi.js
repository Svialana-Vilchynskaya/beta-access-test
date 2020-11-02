import axios from 'axios'

export const fetchWords = () => axios.get('http://localhost:8000/allowedWords').then(response => response.data)
