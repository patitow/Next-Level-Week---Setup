import axios from 'axios'

// configuração cliente http

export const api = axios.create({
    baseURL: 'http://localhost:3333'
    
})

