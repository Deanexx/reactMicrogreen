import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://microgreenapi.herokuapp.com/',
    timeout: 10000,
    withCredentials: true
})

export default instance;