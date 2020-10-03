import axios from 'axios'
const baseUrl = '/api/rooms'


const getRoom = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {getRoom}