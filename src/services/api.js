import axios from 'axios'
const url = 'https://sujeitoprogramador.com/';
const api  = axios.create({
    baseURL: url
}); 

export default api;