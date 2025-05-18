import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export default axiosClient
