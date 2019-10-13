import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    'X-API-KEY': process.env.API_KEY
  }
})