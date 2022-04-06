import Axios from 'axios'
// import { BASE_URL } from '../globals'

const Client = Axios.create({ baseURL: 'http://localhost:4000/api' })

export default Client